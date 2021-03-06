export interface BookingRequest{
    id?: number,
    email:string,
    bookingDate?: Date,
    bookingTime?: string,
    fromPlace?: number,
    toPlace?: number,
    pickupAddress: string,
    landMark: string,
    pickupDate?: Date,
    pickupTime: string,
    cabTypeId?: number,
    contactNo: string,
}