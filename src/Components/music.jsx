import React from 'react';
import { useEffect } from 'react';

export default function Music(props)
{

    const {handler} = props
    useEffect(() => {
        handler()
    })

    return (
        <>
            <iframe title="Kadence N Soundcloud" width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1114515445&color=%23547c9c&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: '100'}}><a href="https://soundcloud.com/kadencen" title="Kadence N" target="_blank" rel="noopener noreferrer" style={{color: '#cccccc',textDecoration: 'none'}}>Kadence N</a> · <a href="https://soundcloud.com/kadencen/sets/original" title="Original" target="_blank" rel="noopener noreferrer" style={{color: '#cccccc', textDecoration: 'none'}}>Original</a></div>
        </>
    )
}