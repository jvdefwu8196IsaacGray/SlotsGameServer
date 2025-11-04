import { BaseController } from "../base/BaseController";


export const EVENT_REFRESH_ONLINE_UI = 'event.refresh.online.ui';

export enum OnlineType {
    normal = 0,
    diamond = 1,
    video = 2,
};

export class OnlineController extends BaseController {
    
    static async init() {

    }

    public reqGetOnlineAward() {
        // NetMgr.I.request(
        //     {
        //         code: Gamegame.GetOnlineAward,

        //         data: { type: type }

        //     }, (res) => {
        //         this.emit(EVENT_REFRESH_ONLINE_UI, res);
        //     }
        // );
    }

    public reqSetOnlineAward(cb: () => void = null) {
        // NetMgr.I.request(
        //     {
        //         code: Gamegame.SetOnlineAward,

        //         data: { type: type }

        //     }, (res) => {
        //         if (res.data.message) {
        //             UIMgr.I.showTip(res.data.message);
        //             return;
        //         }

        //         if (res.data.response.rewards.length == 0) UIMgr.I.showTip("暂无奖励");

        //         else ControllerMgr.I.RewardCostController.show(res.data.response.rewards);

        //         if (type == 0) {
        //             res = null;
        //             this.emit(EVENT_REFRESH_ONLINE_UI, res);
        //         }

        //         if (cb) cb();
        //     }
        // );
    }
}
