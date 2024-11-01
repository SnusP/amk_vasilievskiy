import { Request, Response } from "express";
import PhotoService from "../../services/photos/PhotoService";
import { PhotoAttributes } from "../../models/photos/Photo";
import multer from "multer";
import path from "path";
import fs from "fs";

export default class PhotoController {
  private photoService: PhotoService;

  constructor() {
    this.photoService = new PhotoService();
  }

  private upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "../../uploads/");
        console.log(uploadDir);
        // Ensure the directory exists
        fs.mkdirSync(uploadDir, { recursive: true });
        cb(null, uploadDir);
      },
      filename: (req, file, cb) => {
        const uniqueName = `${path.basename(
          file.originalname,
          path.extname(file.originalname)
        )}_${Date.now()}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
      },
    }),
  }).single("photo");

  create = async (req: Request, res: Response) => {
    this.upload(req, res, async (err: any) => {
      if (err) {
        return res.status(400).send({ error: "Failed to upload file" });
      }

      const { body, file } = req;

      if (!file) {
        return res.status(400).send({ error: "No file uploaded" });
      }

      const photoData: Omit<PhotoAttributes, "id"> = {
        title: body.title,
        filename: file.filename,
        path: `/uploads/${file.filename}`,
      };

      try {
        const photo: PhotoAttributes = await this.photoService.create(
          photoData
        );
        res.status(201).send(photo);
      } catch (error: any) {
        res.status(400).send({ error: error.toString() });
      }
    });
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const photos: PhotoAttributes[] = await this.photoService.getAll();
      res.status(200).send(photos);
    } catch (error: any) {
      res.status(404).send({ error: error.toString() });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedRowsCount: number = await this.photoService.delete(
        parseInt(id)
      );

      if (deletedRowsCount === 0) {
        return res.status(404).send({ error: "Photo not found" });
      }

      res.status(200).send({ message: "Photo successfully deleted" });
    } catch (error: any) {
      res.status(400).send({ error: error.toString() });
    }
  };

  findById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const photo: PhotoAttributes | null = await this.photoService.findById(
        parseInt(id)
      );

      if (!photo) {
        return res.status(404).send({ error: "Photo not found" });
      }

      // Return the relative path starting from the root of the project
      res.status(200).send({ path: `/uploads/${photo.filename}` });
    } catch (error: any) {
      res.status(400).send({ error: error.toString() });
    }
  };
}
