import React, { useState } from 'react'

export const ShareArtwork = ({ state }) => {



    const [artworkShared, setArtworkShared] = useState('');
    const [artworkUrl, setArtworkUrl] = useState('')

    const siteLinks = [
        {
            icon: 'ri-link-m',
            name: 'Copy Link',
            url: '',
            text: 'Hi peeps, I shared latest work on Campkuns. Check it out: + artworkUrl'
        },
        {
            icon: 'ri-facebook-line',
            name: 'Share via Facebook',
            url: 'https://www.whatsapp.com/' + artworkShared,
            text: 'Hi peeps, I shared latest work on Campkuns. Check it out: + artworkUrl'
        },
        {
            icon: 'ri-whatsapp-line',
            name: 'Share via WhatsApp',
            url: 'https://www.whatsapp.com/' + artworkShared,
            text: 'Hi peeps, I shared latest work on Campkuns. Check it out: + artworkUrl'
        },
        {
            icon: 'ri-twitter-line',
            name: 'Share via Twitter',
            url: 'https://www.twitter.com/' + artworkShared,
            text: 'Hi peeps, I shared latest work on Campkuns. Check it out: + artworkUrl'
        },
        {
            icon: 'ri-mail-line',
            name: 'Share via Gmail',
            url: 'https://www.gmail.com/' + artworkShared,
            text: 'Hi peeps, I shared latest work on Campkuns. Check it out: + artworkUrl'
        }
    ]

    return (
        <div style={{ display: state ? 'flex' : 'none' }}>
            <div>
                <div>
                    Share to...
                </div>
                <div className='shareLinks'>
                    <ul>
                        {siteLinks.map(site => {
                            return (
                                <li onClick={e => {
                                    // Copy the text inside the text field
                                    // navigator.clipboard.writeText(site.text.toString());
                                    alert(site.text)
                                    //navigator.vibrate(1)

                                    // Alert the copied text
                                    //alert("LinkCopied");



                                }}>
                                    <i className={site.icon}></i>
                                    <div>{site.name}</div>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
