import React,{Component} from "react";
import axios from "axios";
import Deskripsi from "../Components/Deskripsi";
import Header from "../Components/Header";
import ListPage from "../Components/ListPage";
import Footer from "../Components/Footer";
import "../Components/style.css";

class ListPromosi extends Component{
    constructor(props){
        super(props)
        this.state = {
            Data : [],
            activePage : 0,
            itemCountPerPage : 0,
            totalItemsCount : 0,
            pageRangeDisplayed : 5,
            Description : "",
            isLoading : false
        }
    }
 
    componentDidMount(){
        window.scrollTo(0,0);
        this.fetchListEvent();
    }

    /*
    getRequestParams = (page,pageSize) => {
        let params = {};

        if(page){
            params["page"] = page - 1;
        }
        if(pageSize){
            params["pageSize"] = pageSize;
        }

        return params;
    }
    */
    
    fetchListEvent = () => {
        /*
        const {page,pageSize} = this.state;
        const params = this.getRequestParams(page,pageSize);

        ListEventService.getAll(params)
        */

        axios.get('http://localhost:8000/promosi/pagination?page='+this.state.activePage)
        .then(response => {
            const {data,current_page,per_page,total} = response.data;
            this.setState({
                Data : data,
                activePage : current_page,
                itemsCountPerPage : per_page,
                totalItemsCount : total 
            });
            setTimeout(() => {
                this.setState({ isLoading: false });
            }, 2000);
        })
        .catch((err) =>{
            console.log(err)
        });
    }

    /*
    handlePageChange = (event,value) => {
        this.setState(
        {
            page : value
        },
        () => {
            this.fetchListEvent();
        }
    )
    }
    */
   handlePageChange = (pageNumber) => {
        axios.get('http://localhost:8000/promosi/pagination?page='+pageNumber)
        .then(res => {
            const {data,current_page} = res.data;
            this.setState({
                Data : data,
                activePage : current_page
            })
        });
   }

    render(){
        const color_date = {
            "color" : "#292b29"
        };
        const {Data} = this.state;

        return(
            <React.Fragment>
                <Header />
                <ListPage 
                    title="Promo yang Kami hadirkan saat ini"
                    list_item={Data.map( (element,index) =>
                        <li key={index}> 
                            <a href={'/promosi/' + element.id} className='link-item'>
                                <img src={'http://localhost:8000/img_promotion/' + element.foto} className="list-image-item" alt=""/>
                                <div className='item'>
                                    <h3>{element.judul_promosi}</h3>
                                </div>
                                <div className='deskripsi'>
                                    <span style={color_date}>{element.createdAt}</span>
                                    <Deskripsi deskripsi={element.deskripsi}/>
                                </div>
                            </a>
                        </li>
                    )}
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.handlePageChange}
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ListPromosi;