import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import Albumdetail from './AlbumDetail'

class AlbumList extends Component {

  state = {
    albums: []
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => {
      this.setState({
        albums: response.data
      })
    })
  }

  renderAlbums() {
    return this.state.albums.map((album, i) =>
      <Albumdetail key={i} album={album} />
    )
  }

  render() {

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList
