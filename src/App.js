import './App.css';
import ImageLists from './MyComponents/ImageLists';
import React, { useState, useEffect } from 'react';
import Navbar from './MyComponents/Navbar';
// import { Fab } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Drawer } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import EmailIcon from '@material-ui/icons/Email';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import InfoIcon from '@material-ui/icons/Info'
import IconButton from '@material-ui/core/IconButton';

import { Tooltip } from '@material-ui/core';
// progress bar on top
import LoadingBar from 'react-top-loading-bar'


// to send data to Flask python
import axios from 'axios'

// router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  // Initially it will check if that localstorage is empty or not

  let initTodo;
  let datasLength;

  if (localStorage.getItem("datas") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("datas"))
  }


  // form inputs
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [instaid, setinstaid] = useState("")
  const [upiid, setupiid] = useState("")
  const [mobile, setmobile] = useState("")

  // check toggle state [boolean]
  const [state, setState] = useState(false)

  // datas is variable/json object
  const [datas, setdatas] = useState(initTodo)

  const [link, setlink] = useState("")


  const visitlink = (link, insta_handle) => {
    if (datasLength === 0) {
      toggleDrawer()
    }
    else {
      console.log("link", link)
      setlink(link)
      window.open(link)

      // load local storage
      initTodo = JSON.parse(localStorage.getItem("datas"))

      // making json
      const data = {
        name: initTodo[0]['name'],
        email: initTodo[0]['email'],
        instaid: initTodo[0]['instaid'],
        upiid: initTodo[0]['upiid'],
        mobile: initTodo[0]['mobile'],
        visit: true,
        link: link,
        insta_handle: insta_handle
      }

      // append MyTodo to todos list
      setdatas([...datas, data])
      console.log(data)

      localStorage.setItem("datas", JSON.stringify(datas))

      // It will send post data to python flask backend
      axios.post('https://insta-like-data.herokuapp.com/api', data)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }



  console.log("setlink", link)

  // form submit
  const submit = (e) => {
    e.preventDefault()
    setState(false)
    // window.open('http://google.com')

    // making json
    const data = {
      name: name,
      email: email,
      instaid: instaid,
      upiid: upiid,
      mobile: mobile,
      visit: false,
      link: '',
      insta_handle: ''

    }

    // append MyTodo to todos list
    setdatas([...datas, data])
    console.log(data)

    localStorage.setItem("datas", JSON.stringify(datas))

    // It will send post data to python flask backend
    axios.post('https://insta-like-data.herokuapp.com/api', data)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

  }


  // whenever there will be changes in [datas] useeffect will execute localstorage
  useEffect(() => {
    localStorage.setItem("datas", JSON.stringify(datas));
  }, [datas])


  // Functions
  const toggleDrawer = () => {
    setState(true)
  }

  const toggleWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=918108493971&text=Hi.')
    handleClose()

  }

  const toggleEmail = () => {
    window.open('mailto:patilchirantan75@gmail.com')
    handleClose()
  }

  console.log("datas.length", datas.length)
  console.log("datas", datas)
  datasLength = datas.length

  const actions = [
    { icon: <EmailIcon onClick={toggleEmail} />, name: 'Email' },
    { icon: <WhatsAppIcon onClick={toggleWhatsapp} />, name: 'Whatsapp' },
  ];

  const style = {
    margin: 0,
    right: 20,
    bottom: 20,
    position: 'fixed',
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // setting TOP progress bar

  const [value, setvalue] = useState(10)

  // TOOLTIP function
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={value}
          height={4}
        />

        <Switch>
          {/* <Route exact path="/about">
          <About />
        </Route> */}

          <Route exact path="/">



            <ImageLists datasLength={datasLength} setvalue={setvalue} toggleDrawer={toggleDrawer} visitlink={visitlink} />

            {/* floating button */}

            {/* <Fab style={{ position: 'fixed', width: '55px', height: '55px', bottom: '40px', right: '40px', backgroundColor: '#25D366', color: 'white' }} aria-label="add" onClick={toggleWhatsapp}>
        <WhatsAppIcon fontSize='medium' />
      </Fab> */}

            <SpeedDial
              ariaLabel="SpeedDial openIcon example"
              style={style}
              hidden={false}
              icon={<QuestionAnswerIcon openicon={<EditIcon />} />}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={handleClose}
                  href={action.link}
                />
              ))}
            </SpeedDial>

            {/* Drawer */}
            <Drawer anchor={'bottom'}
              open={state}
              onClose={() => { setState(false) }}>
              <div className="container">
                <h2 className="my-3">Fill Details</h2> <hr className="mb-4" />
                <form onSubmit={submit}>
                  <div className="mb-3 container">
                    {/* <label htmlFor="name" className="form-label">Name</label>
              <input type="name" className="form-control mb-3" id="name" aria-describedby="name" value={name} onChange={(e) => { setname(e.target.value) }} /> */}

                    {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setemail(e.target.value)} /> */}


                    <TextField id="standard-basic" label="Name" variant="standard" value={name} onChange={(e) => { setname(e.target.value) }} style={{ width: '100%', marginBottom: '2%' }} />

                    <TextField id="standard-basic" label="Email" variant="standard" value={email} onChange={(e) => setemail(e.target.value)} style={{ width: '100%', marginBottom: '2%' }} />

                    <TextField id="standard-basic" label="Insta Id" variant="standard" value={instaid} onChange={(e) => { setinstaid(e.target.value) }} style={{ width: '100%', marginBottom: '2%' }} />



                    <div className="d-inline d-flex justify-content-between">
                      <TextField id="standard-basic" label="UPI ID" variant="standard" value={upiid} onChange={(e) => setupiid(e.target.value)} style={{ width: "100%", marginBottom: '1%' }} />


                      <Tooltip title="We will not request any money via UPI" open={showTooltip} placement="top" onOpen={() => setShowTooltip(true)} onClose={() => setShowTooltip(false)}
                        arrow>
                        <IconButton onClick={() => setShowTooltip(!showTooltip)}>
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </div>

                    <TextField id="standard-basic" label="Mobile" type="number" variant="standard" value={mobile} onChange={(e) => { setmobile(e.target.value) }} style={{ width: '100%', marginBottom: '1%' }} />

                  </div>

                  {/* <button type="submit" className={`btn btn-primary my-3 ${name === '' ? 'disabled' : ''} ${email === '' ? 'disabled' : ''}`}>Submit</button> */}

                  <Button type="submit" variant="contained" endIcon={<SendIcon />} color="primary" size="medium" style={{ marginTop: '1%', marginBottom: '3%' }} className={`btn btn-primary my-3 ${name === '' ? 'disabled' : ''} ${email === '' ? 'disabled' : ''} ${instaid === '' ? 'disabled' : ''} ${upiid === '' ? 'disabled' : ''}`}>Send</Button>

                </form>
              </div>
            </Drawer>

          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
