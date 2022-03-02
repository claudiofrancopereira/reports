import { Column, CreateDateColumn, Entity, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm'

import { ReportFile } from './ReportFile'
import { v4 } from 'uuid'

@Entity('reports')
class Report {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    reportNumber: string;

    @Column()
    date: string;

    @Column()
    initialHour: string;

    @Column()
    endHour: string;

    @Column()
    staff: string;
    
    @Column()
    address: string;

    @Column()
    nature: string;

    @Column()
    history: string;

    @Column()
    notes: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @OneToMany(() => ReportFile, file => file.report, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'reportID' })
    files: ReportFile[];

    constructor() {
        if (!this.id) {
            this.id = v4();
        }   
    }
}

export { Report }