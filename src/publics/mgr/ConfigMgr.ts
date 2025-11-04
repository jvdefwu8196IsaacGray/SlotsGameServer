
import { TableCfgBuff } from "../../tables/TableCfgBuff";
import { TableCfgGrowth } from "../../tables/TableCfgGrowth";
import { TableCfgItem } from "../../tables/TableCfgItem";
import { TableCfgJob1 } from "../../tables/TableCfgJob1";
import { TableCfgJob2 } from "../../tables/TableCfgJob2";
import { TableCfgJob3 } from "../../tables/TableCfgJob3";
import { TableCfgLevel } from "../../tables/TableCfgLevel";
import { TableCfgMap } from "../../tables/TableCfgMap";
import { TableCfgMonster } from "../../tables/TableCfgMonster";
import { TableCfgShop } from "../../tables/TableCfgShop";
import { TableCfgSkill } from "../../tables/TableCfgSkill";
import { TableCfgTask } from "../../tables/TableCfgTask";
import { JsonUtil } from "../util/JsonUtil";

export class ConfigMgr {

    public version: string | null = null;

    private static _instance: ConfigMgr | null = null;

    public static get I(): ConfigMgr {
        if (this._instance == null) this._instance = new ConfigMgr;
        return this._instance;
    }

    public async init(_force: boolean = false): Promise<void> {
        await Promise.all([
            JsonUtil.load(TableCfgSkill.TableName),
            JsonUtil.load(TableCfgBuff.TableName),
            JsonUtil.load(TableCfgItem.TableName),
            JsonUtil.load(TableCfgShop.TableName),
            JsonUtil.load(TableCfgLevel.TableName),    
            JsonUtil.load(TableCfgGrowth.TableName),    
            JsonUtil.load(TableCfgMap.TableName),    
            JsonUtil.load(TableCfgMonster.TableName),    
            JsonUtil.load(TableCfgJob1.TableName),    
            JsonUtil.load(TableCfgJob2.TableName),    
            JsonUtil.load(TableCfgJob3.TableName),    
        ]);
    }

}