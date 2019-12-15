import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getFormatTime } from '../../utils';
import { isEmpty, map, join, get, noop } from 'lodash';
import styles from './index.less';

class PlayerList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// 1:播放列表；2：历史记录
			tabIndex: 1
		};
	}

	static propTypes = {
		// title: PropTypes.string.isRequired,
		// link: PropTypes.string,
		// child: PropTypes.element
	};

	render() {
		const { tabIndex } = this.state;
		const { playerList = [], currentPlaySongId, handleDoubleClick = noop, handleClearPlayList } = this.props;
		const len = playerList.length;
		return (
			<div className={`${styles['player-list-wrap']} _player-list-wrap`}>
				<div className={styles['player-list-head']}>
					<div className={styles.tabs}>
						<button className={tabIndex === 1 ? styles['active'] : ''}>播放列表</button>
						<button className={tabIndex === 2 ? styles['active'] : ''}>历史记录</button>
					</div>
					<div className={styles['play-list-close-btn']} onClick={this.handleClosePlayList}>
						<i className="iconfont iconclose" />
					</div>
				</div>
				<div className={styles['player-list-control']}>
					<div>总{playerList.length}首</div>
					<div onClick={handleClearPlayList} className={styles.icon}>
						<i className="iconfont iconqingkong" /> 清空
					</div>
				</div>
				<ul className={styles['player-list']}>
					{map(playerList, (item, index) => {
						const { name, artists, alias, album = {}, id, mvid, duration } = item;
						return (
							<li
								className={currentPlaySongId === id ? styles['active'] : ''}
								key={id}
								onDoubleClick={() => handleDoubleClick(item)}
							>
								<div className={styles.name}>
									<div className={styles.title}>
										<span>{name}</span>
										{!isEmpty(alias) && <span className={styles.alias}>（{join(alias, '，')}）</span>}
									</div>
									<div className={styles['name-icon']}>
										{!!mvid && <i className="iconfont iconmv" />}
									</div>
								</div>
								<div className={styles.artists}>
									{!isEmpty(artists) && join(map(artists, (item) => item.name), '/')}
								</div>
								<div className={styles.duration}>{getFormatTime(duration / 1000)}</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	handleClosePlayList = (event) => {
		const { handleClose = noop } = this.props;
		handleClose(event, false);
	};
}

export default PlayerList;