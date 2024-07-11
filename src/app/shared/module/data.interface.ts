

export interface Ipassenger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: number | null;
    children: Ichildren[] | null;
}

export interface Ichildren{
    name: string;
    age: number;
}

export interface Iproduct {
    productname: string;
    productdetail: string[];
    productstatus: productstatus;
    image: string;
    id: string;
}

export enum productstatus {
    InProgress = 'In Progress',
    Delivered = 'Delivered',
    Dispatched = 'Dispatched'
}