import classnames from 'classnames';
import * as React from 'react';
import Notification from 'rmc-notification';
import './index.global.less';
// import Icon from '../icon';

const SHORT = 3;

// interface IToastConfig {
//   duration: number;
//   mask: boolean;
// }

const config = {
	duration: SHORT,
	mask: true
};

let messageInstance;
let messageNeedHide;
const prefixCls = 'am-toast';

function getMessageInstance(mask, callback) {
	Notification.newInstance(
		{
			prefixCls,
			style: {}, // clear rmc-notification default style
			transitionName: 'am-fade',
			className: classnames({
				[`${prefixCls}-mask`]: mask,
				[`${prefixCls}-nomask`]: !mask
			})
		},
		(notification) => callback && callback(notification)
	);
}

function notice(content, type, duration = config.duration, onClose, mask = config.mask) {
	const iconTypes = {
		info: '',
		success: 'success',
		fail: 'fail',
		offline: 'dislike',
		loading: 'loading'
	};
	const iconType = iconTypes[type];
	messageNeedHide = false;
	getMessageInstance(mask, (notification) => {
		if (!notification) {
			return;
		}

		if (messageInstance) {
			messageInstance.destroy();
			messageInstance = null;
		}

		if (messageNeedHide) {
			notification.destroy();
			messageNeedHide = false;
			return;
		}

		messageInstance = notification;

		notification.notice({
			duration,
			style: {},
			content: (
				<div className={`${prefixCls}-text ${prefixCls}-text-icon`} role="alert" aria-live="assertive">
					<div className={`${prefixCls}-text-info`}>
						{/* {!!iconType && <Icon type={iconType} size="lg" />} */}
						<span>{content}</span>
					</div>
				</div>
			),
			closable: true,
			onClose() {
				if (onClose) {
					onClose();
				}
				notification.destroy();
				notification = null;
				messageInstance = null;
			}
		});
	});
}

export default {
	SHORT,
	LONG: 8,
	show(content, duration, mask) {
		return notice(content, 'info', duration, () => {}, mask);
	},
	info(content, duration, onClose, mask) {
		return notice(content, 'info', duration, onClose, mask);
	},
	success(content, duration, onClose, mask) {
		return notice(content, 'success', duration, onClose, mask);
	},
	fail(content, duration, onClose, mask) {
		return notice(content, 'fail', duration, onClose, mask);
	},
	offline(content, duration, onClose, mask) {
		return notice(content, 'offline', duration, onClose, mask);
	},
	loading(content, duration, onClose, mask) {
		return notice(content, 'loading', duration, onClose, mask);
	},
	hide() {
		if (messageInstance) {
			messageInstance.destroy();
			messageInstance = null;
		} else {
			messageNeedHide = true;
		}
	},
	config(conf = {}) {
		const { duration = SHORT, mask } = conf;
		config.duration = duration;
		if (mask === false) {
			config.mask = false;
		}
	}
};