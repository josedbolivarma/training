// import axios from 'axios';
import { ICourse, RESOURCES_TYPE } from '../../models/entity.models';

class CoursesService {
    CoursesService() {}

    public list = async (): Promise<ICourse[]> => {
        // Aquí se puede llamar un API REST, pero por el momento retorna datos quemados        
        // return axios.post(`${process.env.REACT_APP_FLY_SEARCHER_API}/courses`)
        const listCourses = [
            {
                id: 0,
                name: '1.) Frontend',
                children: [
                    {
                       id: 0,
                       name: 'HTML',
                       children: [
                           {
                              id: 0,
                              name: 'Curso HTML para Principiantes',
                              type: RESOURCES_TYPE.VIDEO,
                              url: 'rbuYtrNUxg4',
                              module: '0',
                           },
                           {
                               id: 1,
                               name: 'Curso de HTML 5 desde CERO',
                               type: RESOURCES_TYPE.VIDEO,
                               url: 'kN1XP-Bef7w',
                               module: '0'
                           },
                           {
                            id: 2,
                            name: 'Aprende HTML en 15 Minutos',
                            type: RESOURCES_TYPE.VIDEO,
                            url: 'mNbnV3aN3KA',
                            module: '0'
                        },                           
                       ] 
                    },
                    {
                        id: 1,
                        name: 'CSS',
                        children: [
                            {
                               id: 3,
                               name: 'Curso de CSS desde CERO (Completo)',
                               type: RESOURCES_TYPE.VIDEO,
                               url: 'OWKXEJN67FE',
                               module: '1',
                            },
                            {
                                id: 4,
                                name: 'Curso CSS para Principiantes',
                                type: RESOURCES_TYPE.VIDEO,
                                url: 'W6GTDfrWjXs',
                                module: '1'
                            },
                            {
                             id: 5,
                             name: 'Aprende CSS en 15 Minutos',
                             type: RESOURCES_TYPE.VIDEO,
                             url: '3yM5uXp-T_0',
                             module: '1'
                         },                           
                        ] 
                    }, 
                    {
                        id: 2,
                        name: 'JavaScript',
                        children: [
                            {
                               id: 6,
                               name: 'Curso Completo de JAVASCRIPT para Principiantes (2021',
                               type: RESOURCES_TYPE.VIDEO,
                               url: 'C4qsdeJ4SLk',
                               module: '2',
                            },
                            {
                                id: 7,
                                name: 'Curso Javascript para Principiantes',
                                type: RESOURCES_TYPE.VIDEO,
                                url: 'RqQ1d1qEWlE',
                                module: '2'
                            },
                            {
                             id: 8,
                             name: 'Aprende JavaScript en 15 Minutos',
                             type: RESOURCES_TYPE.VIDEO,
                             url: 'Q9fwkpxr3Dw',
                             module: '2'
                         },                           
                        ] 
                    } 

                ]
            },
            {
                id: 1,
                name: '2.) Backend',
                children: [
                    {
                       id: 3,
                       name: 'nodeJS',
                       children: [
                           {
                              id: 9,
                              name: 'Nodejs Desde Cero, para principiantes | Curso NodeJS',
                              type: RESOURCES_TYPE.VIDEO,
                              url: 'gnF3qWet3HA',
                              module: '3',
                           },
                           {
                               id: 10,
                               name: 'Aprendiendo Node.JS y Express para crear una API',
                               type: RESOURCES_TYPE.VIDEO,
                               url: 'o85OkeVtm7k',
                               module: '3'
                           },
                           {
                            id: 11,
                            name: 'Node.js Tutorial for Beginners: Learn Node in 1 Hour',
                            type: RESOURCES_TYPE.VIDEO,
                            url: 'TlB_eWDSMt4',
                            module: '3'
                        },                           
                       ] 
                    },

                ]
            }

        ];
        return listCourses;
    }

}

export default CoursesService;
