import { IReadable  } from './IReadable'
import { IWriteable } from './IWriteable'
export interface IBaseService<T> extends IReadable<T>, IWriteable<T>
{
}