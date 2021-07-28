import { Divider, Drawer, IconButton } from '@material-ui/core';
import { ICourse, IModule, IResource } from '../../models/entity.models';
import CancelIcon from '@material-ui/icons/Cancel';

interface AsideProps {
    list: ICourse[];
    handle: (resource: IResource) => boolean;
    currentId: number;
    openedDrawer:boolean;
    toogleDrawer:(event:any)=>void;
}

const Aside = (prop: AsideProps) => {
    return (
        <div className="container">
            <Drawer variant="persistent" anchor={'left'} open={prop.openedDrawer}>
                <div style={{
                    position: 'sticky',
                    top: 0,
                    backgroundColor: '#BEBEBE',
                    padding: '10px',
                    zIndex:1000
                }}>
                    <IconButton style={{float:'right'}} edge="start" onClick={prop.toogleDrawer}
                     color="inherit" aria-label="menu">
                    <CancelIcon />
                    </IconButton>
                </div>
                <nav style={{width:250}} id="docsNav" className="bd-docs-nav ">
                    <nav id="categories" className="bd-categories">
                        <div className="bd-categories-filter">
                            <span className="bd-key">Curso</span>
                        </div>  
                        { prop.list.map((course: ICourse, index: number) => 
                            <div className="bd-category is-current" key={`course-${course.id}`}>
                                <header className="bd-category-header">                            
                                    <strong className="bd-name">{ course.name }</strong>
                                    <button className="bd-category-toggle icon">
                                        <i className="fas fa-chevron-down"></i>
                                    </button>
                                </header>
                                <ul className="bd-category-list">
                                    { course.children.map((module: IModule, index2: number) =>
                                    <div key={`module-${module.id}`}>
                                        <header className="bd-category-header" >
                                            <strong className="bd-name">{ module.name }</strong>
                                            <button className="bd-category-toggle icon">
                                                <i className="fas fa-chevron-down"></i>
                                            </button>
                                        </header>

                                        <ul> 
                                            { module.children.map((resource: IResource, index3: number) =>
                                            <li key={`resource-${resource.id}`} className={ resource.id === prop.currentId ? 'is-current': '' } >
                                                <a onClick = { () => prop.handle(resource) }>
                                                    <span className="bd-name">{ resource.name } - <strong>{ resource.type }</strong></span>
                                                </a>
                                            </li>
                                            )}
                                        </ul>
                                        <Divider/>
                                    </div>
                                    )}
                                </ul>
                                <Divider/>
                            </div>
                        )}
                    </nav>
                    <hr/>
                    <hr/>
                </nav>
            </Drawer>
            
        </div>        
    )
}


export default Aside;
