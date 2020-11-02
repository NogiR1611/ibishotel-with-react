import React,{Component} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Components/style.css";
import lokasi from "../Components/img/location.png";
import tanggal from "../Components/img/date.png";
import waktu from "../Components/img/time.png";
import harga from "../Components/img/price.png";
import email from "../Components/img/email.png";
import nomor from "../Components/img/telephone.png";

class DeskripsiEvents extends Component{
    constructor(props){
        super(props)
        this.state = {
            Data : []
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        fetch(`http://localhost:4000/event/json/${id}`,{
            headers : {
                'Content-Type' : 'application/json',
                'Access-Allow-Control-Origin' : '*'
            },
            method : 'GET'
        })
        .then(res => res.json())
        .then(data => this.setState({Data : data}))
        .catch(err => console.log(err))
    }

    render(){
        let Data = this.state.Data;
        return(
            <React.Fragment>
                <Header />
                <div className="Item-styling">
                    <h1>Events Yang Akan di adakan di Kota Bandung</h1><br/>
                    <h1>{Data.nama_event}</h1>
                    <div className="update">
                        <span>Update : </span><br/>
                        <span>{Data.updatedAt}</span>
                    </div>
                    <div className="img-and-facility">
                        <div>
                            <img src={'http://localhost:8000/img_event/' + Data.foto} className="image-item" alt="" />
                        </div>
                        <div>
                            <div className="lokasi-item" id="Lokasi">
                                <img src={lokasi} alt="" />
                                <span><b>Lokasi : </b></span>
                                <span>{Data.tempat}</span>
                            </div>
                            <div className="lokasi-item" id="Tanggal">
                                <img src={tanggal} alt="" />
                                <span><b>Tanggal : </b></span>
                                <span>{Data.tanggal}</span>
                            </div>
                            <div className="lokasi-item" id="Waktu">
                                <img src={waktu} alt="" />
                                <span><b>Waktu : </b></span>
                                <span>{Data.waktu}</span>
                            </div>
                            <div className="lokasi-item" id="Harga">
                                <img src={harga} alt="" />
                                <span><b>Harga : </b></span>
                                <span>{Data.harga}</span>
                            </div>
                        </div>
                    </div>
                    <p>{Data.deskripsi}</p>
                    <div className="lokasi-item" id="Email">
                        <img src={email} alt="" />
                        <span><b>Email : </b></span>
                        <span>{Data.email}</span>
                    </div>
                    <div className="lokasi-item" id="Nomor">
                        <img src={nomor} alt="" />
                        <span><b>Nomor : </b></span>
                        <span>{Data.nomor}</span> 
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default DeskripsiEvents;