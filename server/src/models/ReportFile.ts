import { Column, CreateDateColumn, Entity, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm'

import { Report } from './Report';

import { v4 } from 'uuid'

@Entity('reportFiles')
class ReportFile {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    path: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Report, report => report.files)
    @JoinColumn({ name: 'reportID' })
    report: Report

    constructor() {
        if (!this.id) {
            this.id = v4();
        }   
    }
}

export { ReportFile }