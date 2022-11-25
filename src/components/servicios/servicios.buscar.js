import React from "react";
//import {request} from "../helper/helper";
import {Container, Row} from "react-bootstrap";

export default class ServiciosBuscar extends React.Component{
    constructor (props) {
        super(props);
        this.State = {}
    }
    render(){
        return (
            <Container>
                <Row>
                    <h1>Buscar Servicio</h1>
                </Row>
            </Container>
        )

    }
}




/*import React from 'react';
import {request} from '../helper/helper';
import {Container, Row} from 'react-bootstrap';
import "./servicios.css";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone  } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

const { SearchBar } = Search;

const products = [ 
    {
        id:1,
        name:"plomeria",
        price: 60000,
    },
    {
        id:2,
        name:"electricidad",
        price: 80000,
    },
    {
        id:3,
        name:"aseo",
        price: 60000,
    },
    {
        id:4,
        name:"jardineria",
        price: 60000,
    },
    {
        id:5,
        name:"mantenimiento",
        price: 70000,
    },
    {
        id:6,
        name:"pintura y diseño",
        price: 90000,
    },
];


const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];


  


export default class ServiciosBuscar extends React.Component {
    constructor(props) {
      super(props);
      this.state= {

      }
    }

    componentDidMount(){
        request
            .get("/servicios")
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        const options = {
            custom: true,
            totalSize: products.length
        };
        return (
            <Container id="servicios-buscar-container">
                <Row>
                    <h1>Buscar Servicios</h1>
                </Row>
                <Row>
                <ToolkitProvider
                    keyField="id"
                    data={ products }
                    columns={ columns }
                    search
                >
                {
                    props => (
                        <>
                            <h3>Input something at below input field:</h3>
                            <SearchBar { ...props.searchProps } />
                            <hr />
                            <PaginationProvider
                            pagination={ paginationFactory(options) }
                            >
                            {
                            ({
                            paginationProps,
                            paginationTableProps
                    
                                }) => (
                                <div>
                                    <SizePerPageDropdownStandalone
                                        { ...paginationProps }
                                    />  
                                    <BootstrapTable
                                        keyField="id"
                                        data={ products }
                                        columns={ columns }
                                        { ...paginationTableProps }
                                        { ...props.baseProps }
                                    />
                                    <PaginationListStandalone
                                        { ...paginationProps }
                                    />
                                </div>
                            )
                        }
                            </PaginationProvider>
                    </>
                    )
                }
                </ToolkitProvider>
                
                </Row>
            </Container>
        );
    }
  }
*/