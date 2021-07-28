import { ICourse, IResource } from '../../models/entity.models'
export interface IProps{}
export interface IState {
    courses: ICourse[];
    resource: IResource;
    openedDrawer:boolean;
}
