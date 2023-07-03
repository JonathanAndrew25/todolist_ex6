import { MDBTableBody, MDBTableHead, MDBBadge, MDBRow, MDBCol, MDBContainer, MDBIcon, MDBTable, MDBCard, MDBTooltip } from 'mdb-react-ui-kit'
import React from 'react'
import './Main.css';
import img1 from './images/checktick1.png';
import img2 from './images/ava1-bg.png';
import img3 from './images/ava2-bg.png';
import img4 from './images/ava3-bg.png';
import img5 from './images/ava5-bg.png';
import img6 from './images/ava6-bg.png';
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

function Main() {
  return (
    <MDBRow className='justify-content'>
      <MDBCol>
        <MDBContainer>
          <MDBCard className='masking'>
          <div className='table'>
    <div className='img-center'>
      <img src={img1} alt='Check' width='60'></img>
      </div>
      <div className='title'>
      <h2>Task List</h2>
    </div>
    <MDBTable className='main-table'><MDBTableHead>
        <tr>
          <th>Team Member</th>
          <th>Task</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th>
            <img src={img2} alt='avatar 1' width={45}></img>
            <span className='name'>Alice Mayer</span>
          </th>
          <td>
            Call Sam For Payments
          </td>
          <td>
            <h6>
              <MDBBadge className='danger' color='danger'>
                High priority
              </MDBBadge>
            </h6>
          </td>
          <td>
          <MDBTooltip
            tag='a' 
            wrapperProps={{ href: "#!"}} 
            title="Done">
              <FaCheck className='check'/>
              </MDBTooltip>
            <MDBTooltip 
            tag='a'
            wrapperProps={{ href: "#!"}}
            title="Remove">
              <FaTrashAlt className='trash' />
            </MDBTooltip>
          </td>
        </tr>
        <tr>
          <th>
            <img src={img3} alt='avatar 2' width={45}></img>
            <span className='name'>Kate Moss</span>
          </th>
          <td className='text-center'>
            Make payment to Bluedart
          </td>
          <td>
            <h6>
              <MDBBadge className='success' color="success">
                Low priority
              </MDBBadge>
            </h6>
          </td>
          <td>
          <MDBTooltip 
            tag='a' 
            wrapperProps={{ href: "#!"}} 
            title="Done">
              <FaCheck className='check'/>
              </MDBTooltip>
            <MDBTooltip
            tag='a'
            wrapperProps={{ href: "#!"}}
            title="Remove">
              <FaTrashAlt className='trash' />
            </MDBTooltip>
          </td>
        </tr>
        <tr>
          <th>
            <img src={img4} alt='avatar 3' width={45}></img>
            <span className='name'>Danny McChain</span>
          </th>
          <td className='text-center'>
            Office rent
          </td>
          <td>
            <h6>
              <MDBBadge className='warning' color="warning">
                Middle priority
              </MDBBadge>
            </h6>
          </td>
          <td>
          <MDBTooltip 
            tag='a' 
            wrapperProps={{ href: "#!"}} 
            title="Done">
              <FaCheck className='check'/>
              </MDBTooltip>
            <MDBTooltip
            tag='a'
            wrapperProps={{ href: "#!"}}
            title="Remove">
              <FaTrashAlt className='trash' />
            </MDBTooltip>
          </td>
        </tr>
        <tr>
          <th>
            <img src={img5} alt='avatar 4' width={45}></img>
            <span className='name'>Alexa Chung</span>
          </th>
          <td className='text-center'>
            Office grocery shopping
          </td>
          <td>
            <h6>
              <MDBBadge className='danger' color="danger">
                High priority
              </MDBBadge>
            </h6>
          </td>
          <td>
          <MDBTooltip 
            tag='a' 
            wrapperProps={{ href: "#!"}} 
            title="Done">
              <FaCheck className='check'/>
              </MDBTooltip>
            <MDBTooltip
            tag='a'
            wrapperProps={{ href: "#!"}}
            title="Remove">
              <FaTrashAlt className='trash' />
            </MDBTooltip>
          </td>
        </tr>
        <tr>
          <th>
            <img src={img6} alt='avatar 5' width={45}></img>
            <span className='name'>Ben Smith</span>
          </th>
          <td className='text-center'>
            Ask for Lunch to Clients
          </td>
          <td>
            <h6>
              <MDBBadge className='success' color='success'>
                Low priority
              </MDBBadge>
            </h6>
          </td>
          <td>
          <MDBTooltip 
            tag='a' 
            wrapperProps={{ href: "#!"}} 
            title="Done">
              <FaCheck className='check'/>
              </MDBTooltip>
            <MDBTooltip
            tag='a'
            wrapperProps={{ href: "#!"}}
            title="Remove">
              <FaTrashAlt className='trash' />
            </MDBTooltip>
          </td>
        </tr>
      </MDBTableBody>
      </MDBTable>
      </div>
      </MDBCard>
      </MDBContainer>
      </MDBCol>
      </MDBRow>
  )
}

export default Main