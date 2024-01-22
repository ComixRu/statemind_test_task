export type Audit = {
    private: boolean,
    audit_name: string,
    start_date: string,
    end_date: string,
    details: AuditDetails,
    desc?: string,
    initial_commit?: string,
    conclusion?: string,
    report_link?: string
}

type AuditDetails = {
    loc: Client['loc'],
    critical_cnt: number,
    high_cnt: number,
    medium_cnt: number
}

export type Client = {
    client: string;
    img: string;
    tvl: number;
    loc: number;
    reports: number;
    audits: Audit[]
}