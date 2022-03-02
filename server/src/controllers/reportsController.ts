import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Report } from '../models/Report';

export default {
    async create(request: Request, response: Response) {
        const reportsRepository = getRepository(Report);

        const {
            reportNumber,
            date,
            initialHour,
            endHour,
            staff,
            address,
            nature,
            history,
            notes
        } = request.body

        const requestFiles = request.files as Express.Multer.File[];
        const files = requestFiles.map(file => {
            return { path: file.filename }
        });

        const report = reportsRepository.create({
            reportNumber,
            date,
            initialHour,
            endHour,
            staff,
            address,
            nature,
            history,
            notes,
            files
        });

        await reportsRepository.save(report);

        return response.status(201).json(report);

    },

    async index(request: Request, response: Response) {
        const reportsRepository = getRepository(Report);

        const reports = await reportsRepository.find({
            relations: ['files']
        });

        return response.json(reports)
    }
}