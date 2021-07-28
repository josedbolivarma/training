import React from 'react';
import Aside from '../../components/layout/Aside';
import { IProps, IState } from './LayoutComponent.model';
import CoursesService from '../../services/courses/Courses.service';
import { IResource } from '../../models/entity.models';
import Video from '../../components/layout/Video';
import { RESOURCES_TYPE } from '../../models/entity.models';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';


class LayoutComponent extends React.Component<IProps, IState> { 
    private coursesService: CoursesService;

    private styles = {
        full_screen:{
            width:'100%'
        }
    }
    
    constructor(props: any) {
        super(props);
        this.coursesService = new CoursesService();
        this.state = {
            courses: [],
            resource: {
                id: 0,
                name: '',
                type: RESOURCES_TYPE.VIDEO,
                url: '',
                children: [],
                module:''
            },
            openedDrawer:false
        }
    }

    async componentDidMount() {

        try {
            const responses: any = await this.coursesService.list();
            this.setState({
                courses: responses,
                resource: responses[0].children[0].children[0]
            });
        } catch (err: any) {
            console.log(err);
        }

    }

    handle = (resource: IResource): boolean => {
       this.setState({resource: resource})
        return true;
    }

    toogleDrawer = (event:any)=>{
        this.setState({
            openedDrawer:this.state.openedDrawer?false:true
        });
    }

    nextCourse = ()=>{
        try{
            let newResource = this.findPart(true);
            if(newResource){
                this.setState({resource:newResource});
            }
        }catch(err:any){}
    }

    prevCourse = ()=>{
        try{
            let newResource = this.findPart(false);
            if(newResource){
                this.setState({resource:newResource});
            }
        }catch(err:any){}
    }

    findPart = (plus:boolean)=>{
        for (let x in this.state.courses){
            let course = this.state.courses[x].children;
            for(let y in course){
                let section = course[y].children;
                for(let z in section){
                    let part = section[z];
                    if(part.id===this.state.resource.id+(plus?1:-1)){
                        return part;
                    }
                }
            }
        }
    }

    render() {
        return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" onClick={this.toogleDrawer}
                     color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" 
                    >
                    Development resources
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="container">                
                <div className="bd-docs bd-is-contained">
                    <nav className="bd-docs-nav" style={{overflowY: "scroll", overflowX: "hidden", height: "2%"}}>
                    <Aside toogleDrawer={this.toogleDrawer} openedDrawer={this.state.openedDrawer}
                    list = { this.state.courses } handle = { this.handle } currentId = { this.state.resource.id } ></Aside>

                    </nav>
                    <div className="column is-10" style={this.styles.full_screen}>
                        <div style={{marginBottom:60}}>
                            <div>
                                <IconButton style={{float:'left'}} onClick={this.prevCourse} edge="start" 
                                color="inherit" aria-label="menu">
                                    <SkipPreviousIcon style={{fontSize:50}} />
                                </IconButton>
                                <IconButton style={{float:'right'}} onClick={this.nextCourse} edge="start" 
                                color="inherit" aria-label="menu">
                                    <SkipNextIcon style={{fontSize:50}}/>
                                </IconButton>
                            </div>
                        </div>
                        <h1 style={{fontWeight:'bold',fontSize:30}}>{this.state.resource?.name}</h1>
                        <section className="column pt-3">   
                            <Video title={this.state.resource?.name || ''} url={this.state.resource?.url || ''}></Video>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default LayoutComponent;
