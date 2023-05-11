import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import Img from '../../../data/static/Users/profiles/eddie/profiles_eddie_1.jpeg'
import { Carousel } from 'antd';
import './postCard.css'
import SuggestPrice from "./suggestPrice";
import { posts } from "../../../data/database/posts";
import anime from 'animejs/lib/anime.es.js';
import CardOptions from "../popup/home/options/cardOptions";
import { faSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { months } from "./dates";


function PostCard({ post, user, optionsScrll }) {

  const [colorOff, colorOn] = useState(['#685c55', '0px solid #685c55', 'ri-thumb-up-line']);
  const [colorOffSuggest, colorOnSuggest] = useState(['#685c55', '1px solid #685c55']);
  const [seeDetails, setSeeDetails] = useState('Details');
  const [colorDetails, setColorDetails] = useState(['#685c55', '1px solid #685c55'])
  const [detailsShow, setDetailsShow] = useState('none')
  const [priceShow, setPriceShow] = useState('flex')
  const [priceShowTgl, setPriceShowTgl] = useState('flex')
  const [colorToggle, setColorToggle] = useState(false);
  const [suggestToggle, setSuggestToggle] = useState(false);
  const [detailsToggle, setDetailsToggle] = useState(false)
  const [priceToggle, setPriceToggle] = useState(true)
  const [displaySuggestTgl, setDisplaySuggestTgl] = useState(false)
  const [AgreeIncre, setAgreeIncre] = useState(post?.agreeCount + 1)
  const [agreeTgl, setAgreeTgl] = useState(false)
  const [optionTgl, setOptionTgl] = useState(false)
  const [monthName, setMonthName] = useState('')


  const buttonDefault = {
    fontSize: '20px', color: colorOff[0], cursor: 'pointer', zIndex: '2', transition: 'all 0.5s cubic-bezier(0.87, 0, 0.13, 1) 0s',
    padding: '15px', borderRadius: '9px', height: '40px', width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'
  };
  const suggestDefault = {
    fontSize: '14px', color: colorOffSuggest[0], border: colorOffSuggest[1], fontFamily: 'Poppins', fontWeight: '500',
    padding: '15px 10px', borderRadius: '9px', height: '40px', marginLeft: '15px', cursor: 'pointer',
    width: 'fit-content', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.5s cubic-bezier(0.87, 0, 0.13, 1) 0s'
  }
  const detailsDefault = {
    fontSize: '14px', color: colorDetails[0], border: colorDetails[1], fontFamily: 'Poppins', fontWeight: '500',
    padding: '10px', borderRadius: '9px', width: '75px', height: '40px', marginLeft: '15px', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.5s cubic-bezier(0.87, 0, 0.13, 1) 0s'
  };

  const clickedAgree = () => {
    setColorToggle(!colorToggle);
    setAgreeTgl(!agreeTgl);
  }
  const clickedSuggest = () => {
    setSuggestToggle(!suggestToggle)
    setDisplaySuggestTgl(!displaySuggestTgl)

  }
  const clickDetails = () => {
    setDetailsToggle(!detailsToggle)
  }
  const clickImg = () => {
    setPriceShowTgl(!priceShowTgl)
    setOptionTgl(false)
  }


  //https://css-tricks.com/svg-line-animation-works/
  anime({
    targets: [('.' + colorOff)],
    scale: [
      { value: .2, easing: 'easeOutSine', duration: 200 },
      { value: 1, easing: 'easeInOutQuad', duration: 600 }
    ],
    delay: anime.stagger(200, { grid: [14, 5], from: 'center' })
  });

  anime({
    targets: ('.' + colorOff),
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });


  useEffect(() => {

    //Suggest Button Logic
    if (suggestToggle) {
      colorOnSuggest(['#685c55', '2px solid #685c55'])
    } else {
      colorOnSuggest(['#685c55', '1px solid #363331'])
    }

    //Details Toggle
    if (detailsToggle) {
      setSeeDetails('Less')
      setColorDetails(['#685c55', '2px solid #685c55'])
      setDetailsShow('flex')
    } else {
      setSeeDetails('Details')
      setColorDetails(['#685c55', '0px solid #685c55'])
      setDetailsShow('none')
    }

    priceToggle ? setPriceShow('flex') : setPriceShow('none')



    // Style date
    for (let i = 0; months.length > i; i++) {
      if (months[i].key === post?.uploadedDate.slice(6, 7)) {
        setMonthName(months[i].name)
        i = months.length + 1
      } else {
        // console.log(months[i].name + post?.uploadedDate.slice(6, 7))
      }
    }
  }, [colorToggle, suggestToggle, detailsToggle, priceToggle, displaySuggestTgl, optionsScrll, optionTgl, post])

  useEffect(() => {
    //Agree + or -
    if (agreeTgl) {

      setAgreeIncre(AgreeIncre + 1)
      //#F69855--#262626
      colorOn(['#ed6d22', '0px solid #363331', 'ri-thumb-up-fill', '#363331'])
    }
    else {
      setAgreeIncre(AgreeIncre - 1)
      colorOn(['#685c55', '1px solid #363331', 'ri-thumb-up-line'])
    }
  }, [agreeTgl])

  document.querySelector('body').onscroll = () => {
    setOptionTgl(false);
  }


  return (
    <div className='postCard-wrap' style={{
      color: 'white', width: '93vw', maxWidth: '470px', margin: '0 auto',
      background: '#1c1c1c', borderRadius: '3px', transition: 'all 0.5s cubic-bezier(0.5, 0.55, 0.70, 0.35)'
    }}>

      <div >
        <SuggestPrice display={displaySuggestTgl} hide={clickedSuggest} Img={post?.images[0]} title={post?.title} price={post?.price} />
      </div>


      <div className="optionwrap" id="optionwrap" onClick={e => setOptionTgl(false)} style={{
        display: optionTgl ? 'block' : 'none'
      }}>
        <CardOptions post={post} cardTag={post?.tags[0] !== undefined ? post?.tags[0] : (post?.title + ' ' + post?.category)} />
      </div>

      <div className="postCard-top-section" style={{
        backgroundColor: '#262626', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', padding: '0 10px', height: '60px', fontFamily: 'Montserrat',
        borderRadius: '15px 15px 0 0'
      }}>

        <div className="postCard-top-left" style={{ display: 'flex' }}>
          <img src={post?.images[0]}
            alt="profile" style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '50%', border: '1px solid #2E2E2E' }} />
          <div className="postCard-top-left-wrap" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10px' }}>
            <div className="postCard-top-left-name" style={{ display: 'flex', fontWeight: '600', marginBottom: '3px', color: '#fef3ec', fontFamily: 'Montserrat' }}>
              {post?.user?.name}
              <div className="userVerification" style={{ marginLeft: '5px', color: '#2294d7' }}>
                {post?.user?.isUserVerified ? <svg style={{ color: '#2294d7', background: '#fef3ec', borderRadius: '100px' }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.86937 0.468323C5.4938 -0.156108 6.5062 -0.156108 7.13063 0.468323L7.6001 0.937795C7.825 1.16269 8.13003 1.28904 8.44808 1.28904H9.11201C9.99509 1.28904 10.711 2.00491 10.711 2.88799V3.55192C10.711 3.86997 10.8373 4.175 11.0622 4.3999L11.5317 4.86937C12.1561 5.4938 12.1561 6.5062 11.5317 7.13063L11.0622 7.6001C10.8373 7.825 10.711 8.13003 10.711 8.44808V9.11201C10.711 9.99509 9.99509 10.711 9.11201 10.711H8.44808C8.13003 10.711 7.825 10.8373 7.6001 11.0622L7.13063 11.5317C6.5062 12.1561 5.4938 12.1561 4.86937 11.5317L4.3999 11.0622C4.175 10.8373 3.86998 10.711 3.55192 10.711H2.88799C2.00491 10.711 1.28903 9.99509 1.28903 9.11201V8.44807C1.28903 8.13002 1.16269 7.825 0.937792 7.6001L0.468323 7.13063C-0.156108 6.5062 -0.156108 5.4938 0.468323 4.86937L0.937793 4.3999C1.16269 4.175 1.28903 3.86998 1.28903 3.55193V2.88799C1.28903 2.00491 2.00491 1.28904 2.88799 1.28904H3.55192C3.86998 1.28904 4.175 1.16269 4.3999 0.937795L4.86937 0.468323ZM8.38379 4.00131L5.32179 7.06364L3.67287 5.41471L3.20184 5.88574L5.32179 8.00569L8.85515 4.47233L8.38379 4.00131Z" fill="#ed6d22" />
                </svg> : ''}
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{
                fontSize: '8px', color: '#848484', display: 'flex', justifyContent: 'center', alignItems: 'center',
                fontWeight: '500', background: '#2d2b2b', padding: '2px 5px', borderRadius: '4px'
              }}>
                Best Seller
              </div>
              <div style={{ fontSize: '12px', color: '#848484', display: 'flex', fontWeight: '600', margin: '0 6px' }}>
                ·
              </div>
              <div className="postCard-top-left-date" style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '12px', color: '#848484', display: 'flex', fontWeight: '400' }}>
                {/* Day */}
                {post?.uploadedDate.slice(8, 9) === '0' ? post?.uploadedDate.slice(9, 10) : post?.uploadedDate.slice(8, 10)}
                {/* Month */}
                <div style={{ margin: '0 3px' }}>
                  {monthName}
                </div>

                {/* Year */}
                {post?.uploadedDate.slice(0, 4)}
              </div>


            </div>
          </div>
        </div>

        <div className="postCard-top-right" style={{ display: 'flex', alignItems: 'center', color: '#685c55' }}>
          <i class="ri-share-forward-fill" style={{ fontSize: '20px' }}></i>
          <i class="ri-more-line" style={{ fontSize: '24px', marginLeft: '20px', marginRight: '10px' }} onClick={e => setOptionTgl(!optionTgl)}></i>
        </div>

      </div>

      <div className="postCard-content-section" onClick={clickImg} >

        <div style={{
          width: '93vw', maxWidth: '470px', height: '93vw',
          maxHeight: '470px', position: 'relative', zIndex: '1'
        }} >
          {post?.images?.length > 0 &&
            <Carousel dots={true} effect="scrollx" >
              {post?.images?.map((image) => {

                return (
                  <div>
                    <img src={image}
                      alt="Artcover" className="postCard-content-artcover" style={{
                        width: '93vw', maxWidth: '470px', height: '93vw',
                        maxHeight: '470px', position: 'relative', zIndex: '-1',
                        objectFit: 'cover'
                      }} />
                  </div>
                )

              })}
            </Carousel>}
        </div>

        <div className="postCard-content-artcover-meta-wrap"
          style={{
            position: 'relative', bottom: '-0.2.9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999px', marginTop: '-100%', zIndex: 1,
            width: '93vw', maxWidth: '470px', height: '93vw', maxHeight: '470px', overflow: 'clip', backdropFilter: 'grayscale(90%)',
            display: detailsShow, flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'Roboto',
            backgroundColor: 'rgba(12,10,9,0.8)', padding: '15px', transition: 'backdrop-filter 5s cubic-bezier(0.5, 0.55, 0.70, 0.35)'
          }}>
          <div className="postCard-content-artcover-meta-collaborator" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500' }}>
            {/* {
              post?.metadata.collaborator?.length > 0 &&
              'w/' + post?.metadata.collaborator?.map((i) => ('@' + i))
            } */}
          </div>
          <div className="postCard-content-artcover-meta-description" style={{ fontFamily: 'neue-haas-grotesk-text', fontSize: '14px', fontWeight: '400' }}>{post?.description}</div>
          <div className="postCard-content-artcover-meta-bottom-wrap">

            <div className="postCard-content-artcover-meta-bottom-1" style={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-start' }}>
              <div className="postCard-content-artcover-meta-category"
                style={{
                  height: '30px', width: 'fit-content', padding: '0 10px', border: post?.category && '0.5px solid rgba(85, 85, 85, 1)',
                  borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px',
                  textDecoration: 'underline', fontFamily: 'Poppins'
                }}>
                {post?.category}
              </div>

              <ul className="postCard-content-artcover-meta-tags-wrap" style={{
                width: '190px', display: 'flex', alignItems: 'center',
                padding: '0', margin: '0 10px', overflowX: 'scroll'
                // <style>

              }}>

                {post?.tags.map((i) => {
                  return (
                    <li key={i} className="postCard-content-artcover-meta-tag" style={{
                      listStyle: 'none', padding: '0 5px', margin: '0',
                      fontSize: '14px', fontFamily: 'Poppins'
                    }}>
                      #{i}
                    </li>
                  )
                })}

              </ul>
            </div>

            <div className="postCard-content-artcover-meta-bottom-2" style={{
              display: 'flex', justifyContent: 'flex-end',
              marginTop: '20px', transition: 'all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)'
            }}>

              <div className="postCard-content-artcover-meta-bottom-2-right"
                style={{ display: 'flex', justifyContent: 'flex-end', padding: '5px 0' }}>
                <div className="postCard-content-artcover-meta-bottom-2-right-agrees"
                  style={{
                    display: 'flex', alignItems: 'center', backgroundColor: 'rgba(30,30,30,0.3)', padding: '5px 10px',
                    borderRadius: '9px'
                  }}>
                  <i className="ri-thumb-up-fill" style={{ fontSize: '18px' }}></i>
                  <div style={{ fontSize: '14px', marginLeft: '5px' }}>
                    {AgreeIncre}
                  </div>
                </div>
                <div className="postCard-content-artcover-meta-bottom-2-right-views"
                  style={{
                    display: 'flex', alignItems: 'center', backgroundColor: 'rgba(30,30,30,0.3)', padding: '5px 10px',
                    borderRadius: '9px', marginLeft: '10px'
                  }}>
                  <i className="ri-eye-line" style={{ fontSize: '18px' }}></i>
                  <div style={{ fontSize: '14px', marginLeft: '5px' }}>
                    {post?.views}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>


      <div className="postCard-content-artcover-meta-bottom-2-left-priceTag"
        style={{
          width: 'fit-content', display: priceShow, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', color: '#1f1e1d',
          padding: '5px 7.5px', borderRadius: '9px', marginTop: '-51px', marginLeft: '15px', position: 'absolute', zIndex: '2',
          transition: 'all 2s cubic-bezier(0.5, 0.55, 0.70, 0.35)', border: '0.2px solid #e3dedb'
        }} >

        <i className="ri-price-tag-line" style={{ fontSize: '18px', transition: 'all 2s cubic-bezier(0.5, 0.55, 0.70, 0.35)' }}></i>
        <div style={{
          fontFamily: 'Roboto Mono, monospace', fontWeight: '550', fontSize: '15px', marginLeft: '5px', display: 'flex',
          transition: 'all 2s cubic-bezier(0.5, 0.55, 0.70, 0.35)',
        }}>

          R
          <div style={{ marginLeft: '2.5px' }}>{post?.price}</div>

        </div>
      </div>


      <div className="postCard-bottom-interaction-wrap"
        style={{ backgroundColor: '#262626', height: 'fit-content', borderRadius: '0 0 15px 15px' }}>
        <div className="postCard-bottom-title" style={{
          padding: '20px 15px', height: 'fit-content', fontFamily: 'Montserrat', color: '#fef3ec',
          fontWeight: '600', width: '100%', overflowY: 'clip', maxHeight: '55px', paddingBottom: '20px'
        }} onClick={e => setOptionTgl(false)}>
          {post?.title}
        </div >
        <div className="postCard-bottom-interactions" style={{
          display: 'flex', justifyContent: 'space-between',
          padding: '20px 15px', paddingBottom: '20px'
        }}>
          <div className="postCard-bottom-interactions-left" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ height: '40px', width: '40px', borderRadius: '9px' }}>
              <div className="likeContainer" style={{
                height: '40px', width: '40px', borderRadius: '9px', transition: 'all 0.5s cubic-bezier(0.5, 0.55, 0.70, 0.35)',
                color: colorOff[0], border: colorOff[1], background: colorOff[3]
              }}>
                <i className={colorOff[2]} style={buttonDefault} onClick={clickedAgree}></i>
              </div>


            </div>

            <button className="postCard-bottom-interactions-suggestPrice" style={suggestDefault} onClick={clickedSuggest}>
              {/* <i className='ri-shopping-bag-2-fill' onClick={clickedSuggest} style={{ marginRight: '10px', fontSize: '20px' }}></i> */}
              Add Item
            </button>
          </div>
          <button className="postCard-bottom-interactions-right-less" style={detailsDefault} onClick={clickDetails}>
            {seeDetails}
          </button>

        </div>
      </div>

    </div>
  )
}

export default PostCard


