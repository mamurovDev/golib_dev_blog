import { Card } from './Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

export const SearchOffcanvas = ({ show, blogs, loading, handleClose, searchHandler, isSearch }) => {
   return (
      <>
         <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
               <Offcanvas.Title className='title'>Maqola qidirish</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
               <Form.Control placeholder='Qidirish...' onChange={searchHandler} />
               <Row>
                  {
                     blogs.length > 0 ? (
                        isSearch && (
                           blogs.map(item => (
                              <Col className='mt-4' lg={12} key={item._id}>
                                 <Card handleClose={handleClose} loading={loading} item={item} />
                              </Col>
                           ))
                        )
                     ) : (
                        isSearch && <h5 className='mt-4'>Qidiruv natijasida ma'lumot topilmadi</h5>
                     )
                  }
               </Row>
            </Offcanvas.Body>
         </Offcanvas>
      </>
   )
}
