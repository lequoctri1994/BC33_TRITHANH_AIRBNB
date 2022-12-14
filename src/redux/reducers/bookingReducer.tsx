import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DispatchType } from '../configStore';
import { http } from '../../utils/config';

export interface BookingModel {
    id: number;
    tenViTri: string;
    tinhThanh: string;
    quocGia: string;
    hinhAnh: string;
}

export interface BookingLocation {
    id: number;
    tenPhong: string;
    khach: number;
    phongNgu: number;
    giuong: number;
    phongTam: number;
    moTa: string;
    giaTien: number;
    mayGiat: boolean;
    banLa: boolean;
    tivi: boolean;
    dieuHoa: boolean;
    wifi: boolean;
    bep: boolean;
    doXe: boolean;
    hoBoi: boolean;
    banUi: boolean;
    maViTri: number;
    hinhAnh: string;
}


interface BookingState {
    arrBooking: BookingModel[],
    arrLocation: BookingLocation[]
}

const initialState: BookingState = {
    arrBooking: [],
    arrLocation: []
}

const bookingReducer = createSlice({
    name: 'bookingReducer',
    initialState,
    reducers: {
        setArrAction: (state: BookingState, action: PayloadAction<BookingModel[]>) => {
            const arrBookingList: BookingModel[] = action.payload;
            state.arrBooking = arrBookingList;
        },
        setArrLocation: (state: BookingState, action: PayloadAction<BookingLocation[]>) => {
            const arrLocationList: BookingLocation[] = action.payload;
            state.arrLocation = arrLocationList;
        },
    }
});

export const { setArrAction, setArrLocation } = bookingReducer.actions
export default bookingReducer.reducer

//--------------------Action Async ---------------------
export const getBookingApi = () => {
    return async (dispatch: DispatchType) => {
        const result: any = await http.get('api/vi-tri');
        let arrBooking: BookingModel[] = result.data.content;
        const action: PayloadAction<BookingModel[]> = setArrAction(arrBooking);
        dispatch(action)
    }
}
export const getBookingLocationApi = (maViTri: number) => {
    return async (dispatch: DispatchType) => {
        const result: any = await http.get('/api/phong-thue/lay-phong-theo-vi-tri?maViTri=' + maViTri);
        let arrBookingLocation: BookingLocation[] = result.data.content;
        const action: PayloadAction<BookingLocation[]> = setArrLocation(arrBookingLocation);
        dispatch(action)
    }
}