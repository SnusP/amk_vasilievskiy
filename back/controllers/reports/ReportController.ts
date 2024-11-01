import { Request, Response } from "express";
import ReportService from "../../services/reports/ReportService";
import { ReportAttributes } from "../../models/reports/Report";
import multer from "multer";
import path from "path";
import fs from "fs";

export default class ReportController {
  private reportService: ReportService;

  constructor() {
    this.reportService = new ReportService();
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

      const reportData: Omit<ReportAttributes, "id"> = {
        reporter: body.reporter,
        text: body.text,
        filename: file ? file.filename : undefined,
        path: file ? `/uploads/${file.filename}` : undefined,
      };

      try {
        const photo: ReportAttributes = await this.reportService.create(
          reportData
        );
        res.status(201).send(photo);
      } catch (error: any) {
        res.status(400).send({ error: error.toString() });
      }
    });
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const report: ReportAttributes[] = await this.reportService.getAll();
      res.status(200).send(report);
    } catch (error: any) {
      res.status(404).send({ error: error.toString() });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedRowsCount: number = await this.reportService.delete(
        parseInt(id)
      );

      if (deletedRowsCount === 0) {
        return res.status(404).send({ error: "Report not found" });
      }

      res.status(200).send({ message: "Report successfully deleted" });
    } catch (error: any) {
      res.status(400).send({ error: error.toString() });
    }
  };
  update = async (request: any, response: any) => {
    try {
      const report = await this.reportService.findById(request.params.id);
      const upd = await this.reportService.update(report, request.body);
      const updatedReport = await this.reportService.findById(
        request.params.id
      );
      response.status(201).send(updatedReport);
    } catch (error: any) {
      response.status(400).send({ error: error.toString() });
    }
  };
  findById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const report: ReportAttributes | null = await this.reportService.findById(
        parseInt(id)
      );

      if (!report) {
        return res.status(404).send({ error: "Report not found" });
      }

      res.status(200).send(report);
    } catch (error: any) {
      res.status(400).send({ error: error.toString() });
    }
  };
}
