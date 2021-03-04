
import { LocalStorageService } from "../../services/local-storage";
const localStorageInstance = new LocalStorageService();
export const initialState: string = localStorageInstance.getItem('lang') || 'vn';
