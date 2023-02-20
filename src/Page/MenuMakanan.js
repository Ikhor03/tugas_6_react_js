import { Component } from "react";
import daftarMakanan from "../Lib/daftarMakanan";
import FormMakanan from "../form/formMakanan";

const listMakanan = [
    {
        NamaMakanan: "Nasi Padang",
        Harga: "20.000"
    },
    {
        NamaMakanan: "Sate",
        Harga: "20.000"
    },
    {
        NamaMakanan: "Soto",
        Harga: "10.000"
    },
    {
        NamaMakanan: "Uduk",
        Harga: "10.000"
    },
    {
        NamaMakanan: "Nasi Kuning",
        Harga: "15.000"
    },
    {
        NamaMakanan: "Ayam Geprek",
        Harga: "15.000"
    },
    {
        NamaMakanan: "Pecel Lele",
        Harga: "15.000"
    },
    {
        NamaMakanan: "Pecel",
        Harga: "10.000"
    },
    {
        NamaMakanan: "Mie Ayam",
        Harga: "10.000"
    }
];

class MenuMakanan extends Component {

    render() {
        return (
            <div>
                <h3>Daftar makanan favorit: </h3>
                <table>
                    <tbody>
                        <tr>
                            {
                                daftarMakanan.map((data, i) => {
                                    return (
                                        <td key={i}>
                                            <img
                                                src={data.img}
                                                alt={data.namaMakanan}
                                                width="150"
                                                height="100"
                                            />
                                            <center>
                                                <p>{data.namaMakanan}</p>
                                                <p>Harga : Rp. {data.harga}</p>
                                            </center>
                                        </td>

                                    )
                                })
                            }
                        </tr>
                    </tbody>
                </table>

                <h4>ListMakanan</h4>
                {listMakanan.map((data, i) => {
                    return (
                        <div key={i}>
                            <p>
                                {data.NamaMakanan} | Harga Rp. {data.Harga}
                            </p>
                        </div>
                    )
                })}

                <FormMakanan />
            </div>
        )
    }
}

export default MenuMakanan;