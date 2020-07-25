import React,{Component} from "react";
import Header from "./Components/Header";
import InputBarang from "./Components/inputBarang";
import Footer from "./Components/Footer";
import "./Components/style.css";

class titipanBarang extends Component{
    constructor(props){
        super(props)
        this.state = {
            jumlah_barang : 0,
            enabled : false

        }
        this.list_jumlah=this.list_jumlah.bind(this);
    }

    handleChange=(e)=>{
        let barang = e.target.value;
        this.setState({jumlah_barang:barang});
    }

    list_jumlah(){
        let barang = this.state.jumlah_barang;
        let list_input = document.getElementById("test");

        for (let i = 0; i<barang; i++){
            let elemen = document.createElement("input");
            let spasi = document.createElement("br");
            elemen.type = "text";
            list_input.appendChild(elemen);
            list_input.appendChild(spasi);
        }
        this.setState({enabled:!this.state.enabled});
    }

    render(){
        return(
            <div>
                <Header />
                <div className="request-list">
                    <h1>List titipan barang</h1>
                    <form action="list_barang.html" method="POST">
                        <label>Silahkan masukan jumlah barang</label><br />
                        <InputBarang
                            disabled={this.state.enabled}
                            handleChange={this.handleChange}
                            jumlah_barang={this.state.jumlah_barang}
                        />
                        <button type="button" onClick={this.list_jumlah}>Oke</button>
                    </form>
                    <div id="test" />
                </div>
                <Footer />
            </div>
        );
    }
}

export default titipanBarang;