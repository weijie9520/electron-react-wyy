import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reducers } from 'store'
import classNames from 'classnames'
import Select from 'components/Select'

import styles from './index.less'

class Playlist extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
      this.props.getTaglist()
      this.props.getPlaylist()
    }

    render() {
        console.log(this.props, 'props')
        const { allCategories } = this.props.playlist
        return (
            <div className={styles.songSheets}>
                <div className={styles.songSortsSelect}>
                    <Select value='欧美'>
                        <div className={styles.allMenu}>全部歌单</div>
                        <div className={styles.otherMenu}>
                            {
                                allCategories.map(item => (
                                    <div className={styles.largeCategory}>
                                        <div className={styles.largeCategoryName}>{item.name}</div>
                                        <ul className={styles.smallTagsCategory}>
                                            {
                                                item.sub.map((ele, index) => (
                                                    <li className={classNames({
                                                        [styles.noBorderTop]: index > 4,
                                                        [styles.addBorderLeft]: index % 5 === 0,
                                                    })}>
                                                        <div>{ele.name}</div>
                                                        {/* {ele.hot ? <div>hot</div> : null} */}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </Select>
                    {/* <div>
                      <div>热门标签：</div>
                      <ul>
                        <li>华语</li>
                        <li>流行</li>
                        <li>摇滚</li>
                        <li>民谣</li>
                      </ul>
                    </div> */}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        taglist: state.playlist.taglist,
        playlist: state.playlist.playlist,
    };
}

function mapDispatchToProps() {
    return {
        getTaglist: reducers.playlist.getTaglist,
        getPlaylist: reducers.playlist.getPlaylist,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
