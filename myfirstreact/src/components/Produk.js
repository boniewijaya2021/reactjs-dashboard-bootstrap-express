import React, { useState, useEffect } from "react";
import ProductServiceControl from "../controllers/ProductController.js";
import ReactTable from "react-table";
import 'react-table/react-table.css'
import { Link } from "react-router-dom";
import { BsFillTrashFill, BsPencil } from 'react-icons/bs';

const Produk = () => {
  const [produklist, setproduklist] = useState([]);

  useEffect(() => {
    retrieveProduk();
  }, []);

  const token = localStorage.usertoken

  if(!token){
      this.props.history.push(`/`)
  }
  
  const retrieveProduk = () => {
    ProductServiceControl.getAll()
      .then(response => {
        setproduklist(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveProduk();
  
  };
 
  //const [rowIdx] = useState();
  const removeProduk = rowIdx => {
    alert(rowIdx)
    ProductServiceControl.remove(rowIdx)
      .then(response => {
        
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
      
  };

 
  const columns = [{
      Header: 'ID',
      accessor: 'id'
     }
     ,{
      Header: 'Title',
      accessor: 'title'
      },
      {
        Header: 'Jenis',
        accessor: 'jenis'
        },
      {
        Header: 'Harga',
        accessor: 'price'
        },

      {
        Header: "Aksi",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>

<BsFillTrashFill size={35}  value={rowIdx} onClick={() => removeProduk(rowIdx)} />

<Link to={`/produk/idproduct/${rowIdx}`}><BsPencil size={35}  /></Link>
</div>
          );
        },
      }
  ];
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto">
          <h3 className="text-center">DATA PRODUCT</h3>
        </div>
  <div className="card form-text">
    <div className="card-header">
    <Link to="/produk/add" className="nav-link"><button type="button" className="btn btn-primary">Tambah</button></Link>
    
  </div>

  
    <div className="card-body">
      <ReactTable
      data={produklist}
      columns={columns}
   />
   </div>

    </div>
    </div>
    </div>
  );
    
};

export default Produk;