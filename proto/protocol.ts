// @ts-nocheck
/*eslint-disable*/
//import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root: typeof import("./protocol.d") = {};

export const game: typeof $root.game = $root.game = (() => {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    const game = {};

    game.Counts = (function() {

        /**
         * Properties of a Counts.
         * @memberof game
         * @interface ICounts
         */

        /**
         * Constructs a new Counts.
         * @memberof game
         * @classdesc Represents a Counts.
         * @implements ICounts
         * @constructor
         * @param {game.ICounts=} [properties] Properties to set
         */
        function Counts(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Counts instance using the specified properties.
         * @function create
         * @memberof game.Counts
         * @static
         * @param {game.ICounts=} [properties] Properties to set
         * @returns {game.Counts} Counts instance
         */
        Counts.create = function create(properties) {
            return new Counts(properties);
        };

        /**
         * Encodes the specified Counts message. Does not implicitly {@link game.Counts.verify|verify} messages.
         * @function encode
         * @memberof game.Counts
         * @static
         * @param {game.ICounts} message Counts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Counts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Counts message, length delimited. Does not implicitly {@link game.Counts.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Counts
         * @static
         * @param {game.ICounts} message Counts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Counts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Counts message from the specified reader or buffer.
         * @function decode
         * @memberof game.Counts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Counts} Counts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Counts.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Counts();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Counts message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Counts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Counts} Counts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Counts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Counts message.
         * @function verify
         * @memberof game.Counts
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Counts.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Counts message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Counts
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Counts} Counts
         */
        Counts.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Counts)
                return object;
            return new $root.game.Counts();
        };

        /**
         * Creates a plain object from a Counts message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Counts
         * @static
         * @param {game.Counts} message Counts
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Counts.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Counts to JSON.
         * @function toJSON
         * @memberof game.Counts
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Counts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Counts
         * @function getTypeUrl
         * @memberof game.Counts
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Counts.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Counts";
        };

        return Counts;
    })();

    /**
     * ErrorCode enum.
     * @name game.ErrorCode
     * @enum {number}
     * @property {number} SUCCESS=0 SUCCESS value
     * @property {number} FAILED=1 FAILED value
     * @property {number} NETERR=2 NETERR value
     * @property {number} RESTART=999 RESTART value
     */
    game.ErrorCode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SUCCESS"] = 0;
        values[valuesById[1] = "FAILED"] = 1;
        values[valuesById[2] = "NETERR"] = 2;
        values[valuesById[999] = "RESTART"] = 999;
        return values;
    })();

    game.Caches = (function() {

        /**
         * Properties of a Caches.
         * @memberof game
         * @interface ICaches
         * @property {Object.<string,number>|null} [settings] Caches settings
         * @property {Object.<string,number>|null} [games] Caches games
         * @property {Object.<string,number>|null} [days] Caches days
         */

        /**
         * Constructs a new Caches.
         * @memberof game
         * @classdesc Represents a Caches.
         * @implements ICaches
         * @constructor
         * @param {game.ICaches=} [properties] Properties to set
         */
        function Caches(properties) {
            this.settings = {};
            this.games = {};
            this.days = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Caches settings.
         * @member {Object.<string,number>} settings
         * @memberof game.Caches
         * @instance
         */
        Caches.prototype.settings = $util.emptyObject;

        /**
         * Caches games.
         * @member {Object.<string,number>} games
         * @memberof game.Caches
         * @instance
         */
        Caches.prototype.games = $util.emptyObject;

        /**
         * Caches days.
         * @member {Object.<string,number>} days
         * @memberof game.Caches
         * @instance
         */
        Caches.prototype.days = $util.emptyObject;

        /**
         * Creates a new Caches instance using the specified properties.
         * @function create
         * @memberof game.Caches
         * @static
         * @param {game.ICaches=} [properties] Properties to set
         * @returns {game.Caches} Caches instance
         */
        Caches.create = function create(properties) {
            return new Caches(properties);
        };

        /**
         * Encodes the specified Caches message. Does not implicitly {@link game.Caches.verify|verify} messages.
         * @function encode
         * @memberof game.Caches
         * @static
         * @param {game.ICaches} message Caches message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Caches.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.settings != null && Object.hasOwnProperty.call(message, "settings"))
                for (let keys = Object.keys(message.settings), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.settings[keys[i]]).ldelim();
            if (message.games != null && Object.hasOwnProperty.call(message, "games"))
                for (let keys = Object.keys(message.games), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.games[keys[i]]).ldelim();
            if (message.days != null && Object.hasOwnProperty.call(message, "days"))
                for (let keys = Object.keys(message.days), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.days[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Caches message, length delimited. Does not implicitly {@link game.Caches.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Caches
         * @static
         * @param {game.ICaches} message Caches message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Caches.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Caches message from the specified reader or buffer.
         * @function decode
         * @memberof game.Caches
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Caches} Caches
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Caches.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Caches(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.settings === $util.emptyObject)
                            message.settings = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = 0;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.settings[key] = value;
                        break;
                    }
                case 2: {
                        if (message.games === $util.emptyObject)
                            message.games = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = 0;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.games[key] = value;
                        break;
                    }
                case 3: {
                        if (message.days === $util.emptyObject)
                            message.days = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = 0;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.days[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Caches message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Caches
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Caches} Caches
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Caches.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Caches message.
         * @function verify
         * @memberof game.Caches
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Caches.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.settings != null && message.hasOwnProperty("settings")) {
                if (!$util.isObject(message.settings))
                    return "settings: object expected";
                let key = Object.keys(message.settings);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isInteger(message.settings[key[i]]))
                        return "settings: integer{k:string} expected";
            }
            if (message.games != null && message.hasOwnProperty("games")) {
                if (!$util.isObject(message.games))
                    return "games: object expected";
                let key = Object.keys(message.games);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isInteger(message.games[key[i]]))
                        return "games: integer{k:string} expected";
            }
            if (message.days != null && message.hasOwnProperty("days")) {
                if (!$util.isObject(message.days))
                    return "days: object expected";
                let key = Object.keys(message.days);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isInteger(message.days[key[i]]))
                        return "days: integer{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a Caches message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Caches
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Caches} Caches
         */
        Caches.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Caches)
                return object;
            let message = new $root.game.Caches();
            if (object.settings) {
                if (typeof object.settings !== "object")
                    throw TypeError(".game.Caches.settings: object expected");
                message.settings = {};
                for (let keys = Object.keys(object.settings), i = 0; i < keys.length; ++i)
                    message.settings[keys[i]] = object.settings[keys[i]] | 0;
            }
            if (object.games) {
                if (typeof object.games !== "object")
                    throw TypeError(".game.Caches.games: object expected");
                message.games = {};
                for (let keys = Object.keys(object.games), i = 0; i < keys.length; ++i)
                    message.games[keys[i]] = object.games[keys[i]] | 0;
            }
            if (object.days) {
                if (typeof object.days !== "object")
                    throw TypeError(".game.Caches.days: object expected");
                message.days = {};
                for (let keys = Object.keys(object.days), i = 0; i < keys.length; ++i)
                    message.days[keys[i]] = object.days[keys[i]] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a Caches message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Caches
         * @static
         * @param {game.Caches} message Caches
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Caches.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults) {
                object.settings = {};
                object.games = {};
                object.days = {};
            }
            let keys2;
            if (message.settings && (keys2 = Object.keys(message.settings)).length) {
                object.settings = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.settings[keys2[j]] = message.settings[keys2[j]];
            }
            if (message.games && (keys2 = Object.keys(message.games)).length) {
                object.games = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.games[keys2[j]] = message.games[keys2[j]];
            }
            if (message.days && (keys2 = Object.keys(message.days)).length) {
                object.days = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.days[keys2[j]] = message.days[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this Caches to JSON.
         * @function toJSON
         * @memberof game.Caches
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Caches.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Caches
         * @function getTypeUrl
         * @memberof game.Caches
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Caches.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Caches";
        };

        return Caches;
    })();

    game.BattleItem = (function() {

        /**
         * Properties of a BattleItem.
         * @memberof game
         * @interface IBattleItem
         * @property {number} itemId BattleItem itemId
         * @property {number} count BattleItem count
         */

        /**
         * Constructs a new BattleItem.
         * @memberof game
         * @classdesc Represents a BattleItem.
         * @implements IBattleItem
         * @constructor
         * @param {game.IBattleItem=} [properties] Properties to set
         */
        function BattleItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleItem itemId.
         * @member {number} itemId
         * @memberof game.BattleItem
         * @instance
         */
        BattleItem.prototype.itemId = 0;

        /**
         * BattleItem count.
         * @member {number} count
         * @memberof game.BattleItem
         * @instance
         */
        BattleItem.prototype.count = 0;

        /**
         * Creates a new BattleItem instance using the specified properties.
         * @function create
         * @memberof game.BattleItem
         * @static
         * @param {game.IBattleItem=} [properties] Properties to set
         * @returns {game.BattleItem} BattleItem instance
         */
        BattleItem.create = function create(properties) {
            return new BattleItem(properties);
        };

        /**
         * Encodes the specified BattleItem message. Does not implicitly {@link game.BattleItem.verify|verify} messages.
         * @function encode
         * @memberof game.BattleItem
         * @static
         * @param {game.IBattleItem} message BattleItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
            return writer;
        };

        /**
         * Encodes the specified BattleItem message, length delimited. Does not implicitly {@link game.BattleItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleItem
         * @static
         * @param {game.IBattleItem} message BattleItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleItem message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleItem} BattleItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.int32();
                        break;
                    }
                case 2: {
                        message.count = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            if (!message.hasOwnProperty("count"))
                throw $util.ProtocolError("missing required 'count'", { instance: message });
            return message;
        };

        /**
         * Decodes a BattleItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleItem} BattleItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleItem message.
         * @function verify
         * @memberof game.BattleItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (!$util.isInteger(message.count))
                return "count: integer expected";
            return null;
        };

        /**
         * Creates a BattleItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleItem} BattleItem
         */
        BattleItem.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleItem)
                return object;
            let message = new $root.game.BattleItem();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.count != null)
                message.count = object.count | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleItem
         * @static
         * @param {game.BattleItem} message BattleItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.count = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this BattleItem to JSON.
         * @function toJSON
         * @memberof game.BattleItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BattleItem
         * @function getTypeUrl
         * @memberof game.BattleItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattleItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.BattleItem";
        };

        return BattleItem;
    })();

    game.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof game
         * @interface ILoginReq
         * @property {string} account LoginReq account
         * @property {string} password LoginReq password
         */

        /**
         * Constructs a new LoginReq.
         * @memberof game
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {game.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq account.
         * @member {string} account
         * @memberof game.LoginReq
         * @instance
         */
        LoginReq.prototype.account = "";

        /**
         * LoginReq password.
         * @member {string} password
         * @memberof game.LoginReq
         * @instance
         */
        LoginReq.prototype.password = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof game.LoginReq
         * @static
         * @param {game.ILoginReq=} [properties] Properties to set
         * @returns {game.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link game.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof game.LoginReq
         * @static
         * @param {game.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link game.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.LoginReq
         * @static
         * @param {game.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.LoginReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.account = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("account"))
                throw $util.ProtocolError("missing required 'account'", { instance: message });
            if (!message.hasOwnProperty("password"))
                throw $util.ProtocolError("missing required 'password'", { instance: message });
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof game.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.account))
                return "account: string expected";
            if (!$util.isString(message.password))
                return "password: string expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.LoginReq)
                return object;
            let message = new $root.game.LoginReq();
            if (object.account != null)
                message.account = String(object.account);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.LoginReq
         * @static
         * @param {game.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.account = "";
                object.password = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof game.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginReq
         * @function getTypeUrl
         * @memberof game.LoginReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.LoginReq";
        };

        return LoginReq;
    })();

    game.LoginRes = (function() {

        /**
         * Properties of a LoginRes.
         * @memberof game
         * @interface ILoginRes
         * @property {number} code LoginRes code
         * @property {string|null} [msg] LoginRes msg
         * @property {Array.<game.IPlayer>|null} [player] LoginRes player
         */

        /**
         * Constructs a new LoginRes.
         * @memberof game
         * @classdesc Represents a LoginRes.
         * @implements ILoginRes
         * @constructor
         * @param {game.ILoginRes=} [properties] Properties to set
         */
        function LoginRes(properties) {
            this.player = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRes code.
         * @member {number} code
         * @memberof game.LoginRes
         * @instance
         */
        LoginRes.prototype.code = 0;

        /**
         * LoginRes msg.
         * @member {string} msg
         * @memberof game.LoginRes
         * @instance
         */
        LoginRes.prototype.msg = "";

        /**
         * LoginRes player.
         * @member {Array.<game.IPlayer>} player
         * @memberof game.LoginRes
         * @instance
         */
        LoginRes.prototype.player = $util.emptyArray;

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @function create
         * @memberof game.LoginRes
         * @static
         * @param {game.ILoginRes=} [properties] Properties to set
         * @returns {game.LoginRes} LoginRes instance
         */
        LoginRes.create = function create(properties) {
            return new LoginRes(properties);
        };

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link game.LoginRes.verify|verify} messages.
         * @function encode
         * @memberof game.LoginRes
         * @static
         * @param {game.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.player != null && message.player.length)
                for (let i = 0; i < message.player.length; ++i)
                    $root.game.Player.encode(message.player[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link game.LoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.LoginRes
         * @static
         * @param {game.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.LoginRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.player && message.player.length))
                            message.player = [];
                        message.player.push($root.game.Player.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRes message.
         * @function verify
         * @memberof game.LoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                if (!Array.isArray(message.player))
                    return "player: array expected";
                for (let i = 0; i < message.player.length; ++i) {
                    let error = $root.game.Player.verify(message.player[i]);
                    if (error)
                        return "player." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.LoginRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.LoginRes} LoginRes
         */
        LoginRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.LoginRes)
                return object;
            let message = new $root.game.LoginRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.player) {
                if (!Array.isArray(object.player))
                    throw TypeError(".game.LoginRes.player: array expected");
                message.player = [];
                for (let i = 0; i < object.player.length; ++i) {
                    if (typeof object.player[i] !== "object")
                        throw TypeError(".game.LoginRes.player: object expected");
                    message.player[i] = $root.game.Player.fromObject(object.player[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.LoginRes
         * @static
         * @param {game.LoginRes} message LoginRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.player = [];
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.player && message.player.length) {
                object.player = [];
                for (let j = 0; j < message.player.length; ++j)
                    object.player[j] = $root.game.Player.toObject(message.player[j], options);
            }
            return object;
        };

        /**
         * Converts this LoginRes to JSON.
         * @function toJSON
         * @memberof game.LoginRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginRes
         * @function getTypeUrl
         * @memberof game.LoginRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.LoginRes";
        };

        return LoginRes;
    })();

    game.RegisterReq = (function() {

        /**
         * Properties of a RegisterReq.
         * @memberof game
         * @interface IRegisterReq
         * @property {string} account RegisterReq account
         * @property {string} password RegisterReq password
         */

        /**
         * Constructs a new RegisterReq.
         * @memberof game
         * @classdesc Represents a RegisterReq.
         * @implements IRegisterReq
         * @constructor
         * @param {game.IRegisterReq=} [properties] Properties to set
         */
        function RegisterReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterReq account.
         * @member {string} account
         * @memberof game.RegisterReq
         * @instance
         */
        RegisterReq.prototype.account = "";

        /**
         * RegisterReq password.
         * @member {string} password
         * @memberof game.RegisterReq
         * @instance
         */
        RegisterReq.prototype.password = "";

        /**
         * Creates a new RegisterReq instance using the specified properties.
         * @function create
         * @memberof game.RegisterReq
         * @static
         * @param {game.IRegisterReq=} [properties] Properties to set
         * @returns {game.RegisterReq} RegisterReq instance
         */
        RegisterReq.create = function create(properties) {
            return new RegisterReq(properties);
        };

        /**
         * Encodes the specified RegisterReq message. Does not implicitly {@link game.RegisterReq.verify|verify} messages.
         * @function encode
         * @memberof game.RegisterReq
         * @static
         * @param {game.IRegisterReq} message RegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified RegisterReq message, length delimited. Does not implicitly {@link game.RegisterReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RegisterReq
         * @static
         * @param {game.IRegisterReq} message RegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.RegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RegisterReq} RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.RegisterReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.account = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("account"))
                throw $util.ProtocolError("missing required 'account'", { instance: message });
            if (!message.hasOwnProperty("password"))
                throw $util.ProtocolError("missing required 'password'", { instance: message });
            return message;
        };

        /**
         * Decodes a RegisterReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RegisterReq} RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterReq message.
         * @function verify
         * @memberof game.RegisterReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.account))
                return "account: string expected";
            if (!$util.isString(message.password))
                return "password: string expected";
            return null;
        };

        /**
         * Creates a RegisterReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RegisterReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RegisterReq} RegisterReq
         */
        RegisterReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.RegisterReq)
                return object;
            let message = new $root.game.RegisterReq();
            if (object.account != null)
                message.account = String(object.account);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a RegisterReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RegisterReq
         * @static
         * @param {game.RegisterReq} message RegisterReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.account = "";
                object.password = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this RegisterReq to JSON.
         * @function toJSON
         * @memberof game.RegisterReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegisterReq
         * @function getTypeUrl
         * @memberof game.RegisterReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.RegisterReq";
        };

        return RegisterReq;
    })();

    game.RegisterRes = (function() {

        /**
         * Properties of a RegisterRes.
         * @memberof game
         * @interface IRegisterRes
         * @property {number} code RegisterRes code
         * @property {string|null} [msg] RegisterRes msg
         */

        /**
         * Constructs a new RegisterRes.
         * @memberof game
         * @classdesc Represents a RegisterRes.
         * @implements IRegisterRes
         * @constructor
         * @param {game.IRegisterRes=} [properties] Properties to set
         */
        function RegisterRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterRes code.
         * @member {number} code
         * @memberof game.RegisterRes
         * @instance
         */
        RegisterRes.prototype.code = 0;

        /**
         * RegisterRes msg.
         * @member {string} msg
         * @memberof game.RegisterRes
         * @instance
         */
        RegisterRes.prototype.msg = "";

        /**
         * Creates a new RegisterRes instance using the specified properties.
         * @function create
         * @memberof game.RegisterRes
         * @static
         * @param {game.IRegisterRes=} [properties] Properties to set
         * @returns {game.RegisterRes} RegisterRes instance
         */
        RegisterRes.create = function create(properties) {
            return new RegisterRes(properties);
        };

        /**
         * Encodes the specified RegisterRes message. Does not implicitly {@link game.RegisterRes.verify|verify} messages.
         * @function encode
         * @memberof game.RegisterRes
         * @static
         * @param {game.IRegisterRes} message RegisterRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified RegisterRes message, length delimited. Does not implicitly {@link game.RegisterRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RegisterRes
         * @static
         * @param {game.IRegisterRes} message RegisterRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.RegisterRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RegisterRes} RegisterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.RegisterRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a RegisterRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RegisterRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RegisterRes} RegisterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterRes message.
         * @function verify
         * @memberof game.RegisterRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a RegisterRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RegisterRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RegisterRes} RegisterRes
         */
        RegisterRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.RegisterRes)
                return object;
            let message = new $root.game.RegisterRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a RegisterRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RegisterRes
         * @static
         * @param {game.RegisterRes} message RegisterRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this RegisterRes to JSON.
         * @function toJSON
         * @memberof game.RegisterRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegisterRes
         * @function getTypeUrl
         * @memberof game.RegisterRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.RegisterRes";
        };

        return RegisterRes;
    })();

    game.CreateReq = (function() {

        /**
         * Properties of a CreateReq.
         * @memberof game
         * @interface ICreateReq
         * @property {string} name CreateReq name
         * @property {number} job CreateReq job
         */

        /**
         * Constructs a new CreateReq.
         * @memberof game
         * @classdesc Represents a CreateReq.
         * @implements ICreateReq
         * @constructor
         * @param {game.ICreateReq=} [properties] Properties to set
         */
        function CreateReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateReq name.
         * @member {string} name
         * @memberof game.CreateReq
         * @instance
         */
        CreateReq.prototype.name = "";

        /**
         * CreateReq job.
         * @member {number} job
         * @memberof game.CreateReq
         * @instance
         */
        CreateReq.prototype.job = 0;

        /**
         * Creates a new CreateReq instance using the specified properties.
         * @function create
         * @memberof game.CreateReq
         * @static
         * @param {game.ICreateReq=} [properties] Properties to set
         * @returns {game.CreateReq} CreateReq instance
         */
        CreateReq.create = function create(properties) {
            return new CreateReq(properties);
        };

        /**
         * Encodes the specified CreateReq message. Does not implicitly {@link game.CreateReq.verify|verify} messages.
         * @function encode
         * @memberof game.CreateReq
         * @static
         * @param {game.ICreateReq} message CreateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.job);
            return writer;
        };

        /**
         * Encodes the specified CreateReq message, length delimited. Does not implicitly {@link game.CreateReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.CreateReq
         * @static
         * @param {game.ICreateReq} message CreateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.CreateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.CreateReq} CreateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.CreateReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.job = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("job"))
                throw $util.ProtocolError("missing required 'job'", { instance: message });
            return message;
        };

        /**
         * Decodes a CreateReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.CreateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.CreateReq} CreateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateReq message.
         * @function verify
         * @memberof game.CreateReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.job))
                return "job: integer expected";
            return null;
        };

        /**
         * Creates a CreateReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.CreateReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.CreateReq} CreateReq
         */
        CreateReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.CreateReq)
                return object;
            let message = new $root.game.CreateReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.job != null)
                message.job = object.job | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.CreateReq
         * @static
         * @param {game.CreateReq} message CreateReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.job = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.job != null && message.hasOwnProperty("job"))
                object.job = message.job;
            return object;
        };

        /**
         * Converts this CreateReq to JSON.
         * @function toJSON
         * @memberof game.CreateReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateReq
         * @function getTypeUrl
         * @memberof game.CreateReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.CreateReq";
        };

        return CreateReq;
    })();

    game.CreateRes = (function() {

        /**
         * Properties of a CreateRes.
         * @memberof game
         * @interface ICreateRes
         * @property {number} code CreateRes code
         * @property {string|null} [msg] CreateRes msg
         * @property {game.IPlayer|null} [player] CreateRes player
         */

        /**
         * Constructs a new CreateRes.
         * @memberof game
         * @classdesc Represents a CreateRes.
         * @implements ICreateRes
         * @constructor
         * @param {game.ICreateRes=} [properties] Properties to set
         */
        function CreateRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRes code.
         * @member {number} code
         * @memberof game.CreateRes
         * @instance
         */
        CreateRes.prototype.code = 0;

        /**
         * CreateRes msg.
         * @member {string} msg
         * @memberof game.CreateRes
         * @instance
         */
        CreateRes.prototype.msg = "";

        /**
         * CreateRes player.
         * @member {game.IPlayer|null|undefined} player
         * @memberof game.CreateRes
         * @instance
         */
        CreateRes.prototype.player = null;

        /**
         * Creates a new CreateRes instance using the specified properties.
         * @function create
         * @memberof game.CreateRes
         * @static
         * @param {game.ICreateRes=} [properties] Properties to set
         * @returns {game.CreateRes} CreateRes instance
         */
        CreateRes.create = function create(properties) {
            return new CreateRes(properties);
        };

        /**
         * Encodes the specified CreateRes message. Does not implicitly {@link game.CreateRes.verify|verify} messages.
         * @function encode
         * @memberof game.CreateRes
         * @static
         * @param {game.ICreateRes} message CreateRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                $root.game.Player.encode(message.player, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateRes message, length delimited. Does not implicitly {@link game.CreateRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.CreateRes
         * @static
         * @param {game.ICreateRes} message CreateRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.CreateRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.CreateRes} CreateRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.CreateRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.player = $root.game.Player.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a CreateRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.CreateRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.CreateRes} CreateRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRes message.
         * @function verify
         * @memberof game.CreateRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                let error = $root.game.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            return null;
        };

        /**
         * Creates a CreateRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.CreateRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.CreateRes} CreateRes
         */
        CreateRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.CreateRes)
                return object;
            let message = new $root.game.CreateRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".game.CreateRes.player: object expected");
                message.player = $root.game.Player.fromObject(object.player);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.CreateRes
         * @static
         * @param {game.CreateRes} message CreateRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.player = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.game.Player.toObject(message.player, options);
            return object;
        };

        /**
         * Converts this CreateRes to JSON.
         * @function toJSON
         * @memberof game.CreateRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateRes
         * @function getTypeUrl
         * @memberof game.CreateRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.CreateRes";
        };

        return CreateRes;
    })();

    game.SelectReq = (function() {

        /**
         * Properties of a SelectReq.
         * @memberof game
         * @interface ISelectReq
         * @property {number} playerId SelectReq playerId
         */

        /**
         * Constructs a new SelectReq.
         * @memberof game
         * @classdesc Represents a SelectReq.
         * @implements ISelectReq
         * @constructor
         * @param {game.ISelectReq=} [properties] Properties to set
         */
        function SelectReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelectReq playerId.
         * @member {number} playerId
         * @memberof game.SelectReq
         * @instance
         */
        SelectReq.prototype.playerId = 0;

        /**
         * Creates a new SelectReq instance using the specified properties.
         * @function create
         * @memberof game.SelectReq
         * @static
         * @param {game.ISelectReq=} [properties] Properties to set
         * @returns {game.SelectReq} SelectReq instance
         */
        SelectReq.create = function create(properties) {
            return new SelectReq(properties);
        };

        /**
         * Encodes the specified SelectReq message. Does not implicitly {@link game.SelectReq.verify|verify} messages.
         * @function encode
         * @memberof game.SelectReq
         * @static
         * @param {game.ISelectReq} message SelectReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified SelectReq message, length delimited. Does not implicitly {@link game.SelectReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.SelectReq
         * @static
         * @param {game.ISelectReq} message SelectReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelectReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.SelectReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.SelectReq} SelectReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.SelectReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            return message;
        };

        /**
         * Decodes a SelectReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.SelectReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.SelectReq} SelectReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelectReq message.
         * @function verify
         * @memberof game.SelectReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelectReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
            return null;
        };

        /**
         * Creates a SelectReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.SelectReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.SelectReq} SelectReq
         */
        SelectReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.SelectReq)
                return object;
            let message = new $root.game.SelectReq();
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SelectReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.SelectReq
         * @static
         * @param {game.SelectReq} message SelectReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelectReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.playerId = 0;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            return object;
        };

        /**
         * Converts this SelectReq to JSON.
         * @function toJSON
         * @memberof game.SelectReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelectReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SelectReq
         * @function getTypeUrl
         * @memberof game.SelectReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SelectReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.SelectReq";
        };

        return SelectReq;
    })();

    game.SelectRes = (function() {

        /**
         * Properties of a SelectRes.
         * @memberof game
         * @interface ISelectRes
         * @property {number} code SelectRes code
         * @property {string|null} [msg] SelectRes msg
         * @property {game.IPlayer|null} [player] SelectRes player
         * @property {Array.<game.ISkill>|null} [skills] SelectRes skills
         * @property {Array.<game.IItem>|null} [items] SelectRes items
         * @property {Array.<game.IPart>|null} [parts] SelectRes parts
         * @property {Array.<game.IGrowth>|null} [growths] SelectRes growths
         * @property {game.ICaches} caches SelectRes caches
         */

        /**
         * Constructs a new SelectRes.
         * @memberof game
         * @classdesc Represents a SelectRes.
         * @implements ISelectRes
         * @constructor
         * @param {game.ISelectRes=} [properties] Properties to set
         */
        function SelectRes(properties) {
            this.skills = [];
            this.items = [];
            this.parts = [];
            this.growths = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelectRes code.
         * @member {number} code
         * @memberof game.SelectRes
         * @instance
         */
        SelectRes.prototype.code = 0;

        /**
         * SelectRes msg.
         * @member {string} msg
         * @memberof game.SelectRes
         * @instance
         */
        SelectRes.prototype.msg = "";

        /**
         * SelectRes player.
         * @member {game.IPlayer|null|undefined} player
         * @memberof game.SelectRes
         * @instance
         */
        SelectRes.prototype.player = null;

        /**
         * SelectRes skills.
         * @member {Array.<game.ISkill>} skills
         * @memberof game.SelectRes
         * @instance
         */
        SelectRes.prototype.skills = $util.emptyArray;

        /**
         * SelectRes items.
         * @member {Array.<game.IItem>} items
         * @memberof game.SelectRes
         * @instance
         */
        SelectRes.prototype.items = $util.emptyArray;

        /**
         * SelectRes parts.
         * @member {Array.<game.IPart>} parts
         * @memberof game.SelectRes
         * @instance
         */
        SelectRes.prototype.parts = $util.emptyArray;

        /**
         * SelectRes growths.
         * @member {Array.<game.IGrowth>} growths
         * @memberof game.SelectRes
         * @instance
         */
        SelectRes.prototype.growths = $util.emptyArray;

        /**
         * SelectRes caches.
         * @member {game.ICaches} caches
         * @memberof game.SelectRes
         * @instance
         */
        SelectRes.prototype.caches = null;

        /**
         * Creates a new SelectRes instance using the specified properties.
         * @function create
         * @memberof game.SelectRes
         * @static
         * @param {game.ISelectRes=} [properties] Properties to set
         * @returns {game.SelectRes} SelectRes instance
         */
        SelectRes.create = function create(properties) {
            return new SelectRes(properties);
        };

        /**
         * Encodes the specified SelectRes message. Does not implicitly {@link game.SelectRes.verify|verify} messages.
         * @function encode
         * @memberof game.SelectRes
         * @static
         * @param {game.ISelectRes} message SelectRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                $root.game.Player.encode(message.player, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.skills != null && message.skills.length)
                for (let i = 0; i < message.skills.length; ++i)
                    $root.game.Skill.encode(message.skills[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.game.Item.encode(message.items[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.parts != null && message.parts.length)
                for (let i = 0; i < message.parts.length; ++i)
                    $root.game.Part.encode(message.parts[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.growths != null && message.growths.length)
                for (let i = 0; i < message.growths.length; ++i)
                    $root.game.Growth.encode(message.growths[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            $root.game.Caches.encode(message.caches, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SelectRes message, length delimited. Does not implicitly {@link game.SelectRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.SelectRes
         * @static
         * @param {game.ISelectRes} message SelectRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelectRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.SelectRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.SelectRes} SelectRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.SelectRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.player = $root.game.Player.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.skills && message.skills.length))
                            message.skills = [];
                        message.skills.push($root.game.Skill.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.game.Item.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        if (!(message.parts && message.parts.length))
                            message.parts = [];
                        message.parts.push($root.game.Part.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        if (!(message.growths && message.growths.length))
                            message.growths = [];
                        message.growths.push($root.game.Growth.decode(reader, reader.uint32()));
                        break;
                    }
                case 8: {
                        message.caches = $root.game.Caches.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            if (!message.hasOwnProperty("caches"))
                throw $util.ProtocolError("missing required 'caches'", { instance: message });
            return message;
        };

        /**
         * Decodes a SelectRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.SelectRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.SelectRes} SelectRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelectRes message.
         * @function verify
         * @memberof game.SelectRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelectRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                let error = $root.game.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.skills != null && message.hasOwnProperty("skills")) {
                if (!Array.isArray(message.skills))
                    return "skills: array expected";
                for (let i = 0; i < message.skills.length; ++i) {
                    let error = $root.game.Skill.verify(message.skills[i]);
                    if (error)
                        return "skills." + error;
                }
            }
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.game.Item.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            if (message.parts != null && message.hasOwnProperty("parts")) {
                if (!Array.isArray(message.parts))
                    return "parts: array expected";
                for (let i = 0; i < message.parts.length; ++i) {
                    let error = $root.game.Part.verify(message.parts[i]);
                    if (error)
                        return "parts." + error;
                }
            }
            if (message.growths != null && message.hasOwnProperty("growths")) {
                if (!Array.isArray(message.growths))
                    return "growths: array expected";
                for (let i = 0; i < message.growths.length; ++i) {
                    let error = $root.game.Growth.verify(message.growths[i]);
                    if (error)
                        return "growths." + error;
                }
            }
            {
                let error = $root.game.Caches.verify(message.caches);
                if (error)
                    return "caches." + error;
            }
            return null;
        };

        /**
         * Creates a SelectRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.SelectRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.SelectRes} SelectRes
         */
        SelectRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.SelectRes)
                return object;
            let message = new $root.game.SelectRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".game.SelectRes.player: object expected");
                message.player = $root.game.Player.fromObject(object.player);
            }
            if (object.skills) {
                if (!Array.isArray(object.skills))
                    throw TypeError(".game.SelectRes.skills: array expected");
                message.skills = [];
                for (let i = 0; i < object.skills.length; ++i) {
                    if (typeof object.skills[i] !== "object")
                        throw TypeError(".game.SelectRes.skills: object expected");
                    message.skills[i] = $root.game.Skill.fromObject(object.skills[i]);
                }
            }
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".game.SelectRes.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".game.SelectRes.items: object expected");
                    message.items[i] = $root.game.Item.fromObject(object.items[i]);
                }
            }
            if (object.parts) {
                if (!Array.isArray(object.parts))
                    throw TypeError(".game.SelectRes.parts: array expected");
                message.parts = [];
                for (let i = 0; i < object.parts.length; ++i) {
                    if (typeof object.parts[i] !== "object")
                        throw TypeError(".game.SelectRes.parts: object expected");
                    message.parts[i] = $root.game.Part.fromObject(object.parts[i]);
                }
            }
            if (object.growths) {
                if (!Array.isArray(object.growths))
                    throw TypeError(".game.SelectRes.growths: array expected");
                message.growths = [];
                for (let i = 0; i < object.growths.length; ++i) {
                    if (typeof object.growths[i] !== "object")
                        throw TypeError(".game.SelectRes.growths: object expected");
                    message.growths[i] = $root.game.Growth.fromObject(object.growths[i]);
                }
            }
            if (object.caches != null) {
                if (typeof object.caches !== "object")
                    throw TypeError(".game.SelectRes.caches: object expected");
                message.caches = $root.game.Caches.fromObject(object.caches);
            }
            return message;
        };

        /**
         * Creates a plain object from a SelectRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.SelectRes
         * @static
         * @param {game.SelectRes} message SelectRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelectRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.skills = [];
                object.items = [];
                object.parts = [];
                object.growths = [];
            }
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.player = null;
                object.caches = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.game.Player.toObject(message.player, options);
            if (message.skills && message.skills.length) {
                object.skills = [];
                for (let j = 0; j < message.skills.length; ++j)
                    object.skills[j] = $root.game.Skill.toObject(message.skills[j], options);
            }
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.game.Item.toObject(message.items[j], options);
            }
            if (message.parts && message.parts.length) {
                object.parts = [];
                for (let j = 0; j < message.parts.length; ++j)
                    object.parts[j] = $root.game.Part.toObject(message.parts[j], options);
            }
            if (message.growths && message.growths.length) {
                object.growths = [];
                for (let j = 0; j < message.growths.length; ++j)
                    object.growths[j] = $root.game.Growth.toObject(message.growths[j], options);
            }
            if (message.caches != null && message.hasOwnProperty("caches"))
                object.caches = $root.game.Caches.toObject(message.caches, options);
            return object;
        };

        /**
         * Converts this SelectRes to JSON.
         * @function toJSON
         * @memberof game.SelectRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelectRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SelectRes
         * @function getTypeUrl
         * @memberof game.SelectRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SelectRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.SelectRes";
        };

        return SelectRes;
    })();

    game.PayReq = (function() {

        /**
         * Properties of a PayReq.
         * @memberof game
         * @interface IPayReq
         * @property {number} type PayReq type
         * @property {number} id PayReq id
         */

        /**
         * Constructs a new PayReq.
         * @memberof game
         * @classdesc Represents a PayReq.
         * @implements IPayReq
         * @constructor
         * @param {game.IPayReq=} [properties] Properties to set
         */
        function PayReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PayReq type.
         * @member {number} type
         * @memberof game.PayReq
         * @instance
         */
        PayReq.prototype.type = 0;

        /**
         * PayReq id.
         * @member {number} id
         * @memberof game.PayReq
         * @instance
         */
        PayReq.prototype.id = 0;

        /**
         * Creates a new PayReq instance using the specified properties.
         * @function create
         * @memberof game.PayReq
         * @static
         * @param {game.IPayReq=} [properties] Properties to set
         * @returns {game.PayReq} PayReq instance
         */
        PayReq.create = function create(properties) {
            return new PayReq(properties);
        };

        /**
         * Encodes the specified PayReq message. Does not implicitly {@link game.PayReq.verify|verify} messages.
         * @function encode
         * @memberof game.PayReq
         * @static
         * @param {game.IPayReq} message PayReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified PayReq message, length delimited. Does not implicitly {@link game.PayReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PayReq
         * @static
         * @param {game.IPayReq} message PayReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PayReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.PayReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PayReq} PayReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.PayReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.id = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a PayReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PayReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PayReq} PayReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PayReq message.
         * @function verify
         * @memberof game.PayReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PayReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            return null;
        };

        /**
         * Creates a PayReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PayReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PayReq} PayReq
         */
        PayReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.PayReq)
                return object;
            let message = new $root.game.PayReq();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a PayReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PayReq
         * @static
         * @param {game.PayReq} message PayReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PayReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = 0;
                object.id = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this PayReq to JSON.
         * @function toJSON
         * @memberof game.PayReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PayReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PayReq
         * @function getTypeUrl
         * @memberof game.PayReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PayReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.PayReq";
        };

        return PayReq;
    })();

    game.ServerTimeReq = (function() {

        /**
         * Properties of a ServerTimeReq.
         * @memberof game
         * @interface IServerTimeReq
         * @property {boolean} isClear ServerTimeReq isClear
         * @property {number|Long|null} [time] ServerTimeReq time
         */

        /**
         * Constructs a new ServerTimeReq.
         * @memberof game
         * @classdesc Represents a ServerTimeReq.
         * @implements IServerTimeReq
         * @constructor
         * @param {game.IServerTimeReq=} [properties] Properties to set
         */
        function ServerTimeReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerTimeReq isClear.
         * @member {boolean} isClear
         * @memberof game.ServerTimeReq
         * @instance
         */
        ServerTimeReq.prototype.isClear = false;

        /**
         * ServerTimeReq time.
         * @member {number|Long} time
         * @memberof game.ServerTimeReq
         * @instance
         */
        ServerTimeReq.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ServerTimeReq instance using the specified properties.
         * @function create
         * @memberof game.ServerTimeReq
         * @static
         * @param {game.IServerTimeReq=} [properties] Properties to set
         * @returns {game.ServerTimeReq} ServerTimeReq instance
         */
        ServerTimeReq.create = function create(properties) {
            return new ServerTimeReq(properties);
        };

        /**
         * Encodes the specified ServerTimeReq message. Does not implicitly {@link game.ServerTimeReq.verify|verify} messages.
         * @function encode
         * @memberof game.ServerTimeReq
         * @static
         * @param {game.IServerTimeReq} message ServerTimeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerTimeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isClear);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified ServerTimeReq message, length delimited. Does not implicitly {@link game.ServerTimeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ServerTimeReq
         * @static
         * @param {game.IServerTimeReq} message ServerTimeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerTimeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerTimeReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.ServerTimeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ServerTimeReq} ServerTimeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerTimeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ServerTimeReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.isClear = reader.bool();
                        break;
                    }
                case 2: {
                        message.time = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("isClear"))
                throw $util.ProtocolError("missing required 'isClear'", { instance: message });
            return message;
        };

        /**
         * Decodes a ServerTimeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ServerTimeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ServerTimeReq} ServerTimeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerTimeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerTimeReq message.
         * @function verify
         * @memberof game.ServerTimeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerTimeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.isClear !== "boolean")
                return "isClear: boolean expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };

        /**
         * Creates a ServerTimeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.ServerTimeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.ServerTimeReq} ServerTimeReq
         */
        ServerTimeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.ServerTimeReq)
                return object;
            let message = new $root.game.ServerTimeReq();
            if (object.isClear != null)
                message.isClear = Boolean(object.isClear);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ServerTimeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.ServerTimeReq
         * @static
         * @param {game.ServerTimeReq} message ServerTimeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerTimeReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.isClear = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.isClear != null && message.hasOwnProperty("isClear"))
                object.isClear = message.isClear;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            return object;
        };

        /**
         * Converts this ServerTimeReq to JSON.
         * @function toJSON
         * @memberof game.ServerTimeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerTimeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerTimeReq
         * @function getTypeUrl
         * @memberof game.ServerTimeReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerTimeReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.ServerTimeReq";
        };

        return ServerTimeReq;
    })();

    game.ServerTimeRes = (function() {

        /**
         * Properties of a ServerTimeRes.
         * @memberof game
         * @interface IServerTimeRes
         * @property {number} code ServerTimeRes code
         * @property {string|null} [msg] ServerTimeRes msg
         * @property {number|Long|null} [time] ServerTimeRes time
         * @property {boolean|null} [isClear] ServerTimeRes isClear
         */

        /**
         * Constructs a new ServerTimeRes.
         * @memberof game
         * @classdesc Represents a ServerTimeRes.
         * @implements IServerTimeRes
         * @constructor
         * @param {game.IServerTimeRes=} [properties] Properties to set
         */
        function ServerTimeRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerTimeRes code.
         * @member {number} code
         * @memberof game.ServerTimeRes
         * @instance
         */
        ServerTimeRes.prototype.code = 0;

        /**
         * ServerTimeRes msg.
         * @member {string} msg
         * @memberof game.ServerTimeRes
         * @instance
         */
        ServerTimeRes.prototype.msg = "";

        /**
         * ServerTimeRes time.
         * @member {number|Long} time
         * @memberof game.ServerTimeRes
         * @instance
         */
        ServerTimeRes.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ServerTimeRes isClear.
         * @member {boolean} isClear
         * @memberof game.ServerTimeRes
         * @instance
         */
        ServerTimeRes.prototype.isClear = false;

        /**
         * Creates a new ServerTimeRes instance using the specified properties.
         * @function create
         * @memberof game.ServerTimeRes
         * @static
         * @param {game.IServerTimeRes=} [properties] Properties to set
         * @returns {game.ServerTimeRes} ServerTimeRes instance
         */
        ServerTimeRes.create = function create(properties) {
            return new ServerTimeRes(properties);
        };

        /**
         * Encodes the specified ServerTimeRes message. Does not implicitly {@link game.ServerTimeRes.verify|verify} messages.
         * @function encode
         * @memberof game.ServerTimeRes
         * @static
         * @param {game.IServerTimeRes} message ServerTimeRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerTimeRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.time);
            if (message.isClear != null && Object.hasOwnProperty.call(message, "isClear"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isClear);
            return writer;
        };

        /**
         * Encodes the specified ServerTimeRes message, length delimited. Does not implicitly {@link game.ServerTimeRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ServerTimeRes
         * @static
         * @param {game.IServerTimeRes} message ServerTimeRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerTimeRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerTimeRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.ServerTimeRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ServerTimeRes} ServerTimeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerTimeRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ServerTimeRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.time = reader.int64();
                        break;
                    }
                case 4: {
                        message.isClear = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a ServerTimeRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ServerTimeRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ServerTimeRes} ServerTimeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerTimeRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerTimeRes message.
         * @function verify
         * @memberof game.ServerTimeRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerTimeRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            if (message.isClear != null && message.hasOwnProperty("isClear"))
                if (typeof message.isClear !== "boolean")
                    return "isClear: boolean expected";
            return null;
        };

        /**
         * Creates a ServerTimeRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.ServerTimeRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.ServerTimeRes} ServerTimeRes
         */
        ServerTimeRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.ServerTimeRes)
                return object;
            let message = new $root.game.ServerTimeRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            if (object.isClear != null)
                message.isClear = Boolean(object.isClear);
            return message;
        };

        /**
         * Creates a plain object from a ServerTimeRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.ServerTimeRes
         * @static
         * @param {game.ServerTimeRes} message ServerTimeRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerTimeRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
                object.isClear = false;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            if (message.isClear != null && message.hasOwnProperty("isClear"))
                object.isClear = message.isClear;
            return object;
        };

        /**
         * Converts this ServerTimeRes to JSON.
         * @function toJSON
         * @memberof game.ServerTimeRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerTimeRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerTimeRes
         * @function getTypeUrl
         * @memberof game.ServerTimeRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerTimeRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.ServerTimeRes";
        };

        return ServerTimeRes;
    })();

    game.SaveSettingReq = (function() {

        /**
         * Properties of a SaveSettingReq.
         * @memberof game
         * @interface ISaveSettingReq
         * @property {string} key SaveSettingReq key
         * @property {number} value SaveSettingReq value
         */

        /**
         * Constructs a new SaveSettingReq.
         * @memberof game
         * @classdesc Represents a SaveSettingReq.
         * @implements ISaveSettingReq
         * @constructor
         * @param {game.ISaveSettingReq=} [properties] Properties to set
         */
        function SaveSettingReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SaveSettingReq key.
         * @member {string} key
         * @memberof game.SaveSettingReq
         * @instance
         */
        SaveSettingReq.prototype.key = "";

        /**
         * SaveSettingReq value.
         * @member {number} value
         * @memberof game.SaveSettingReq
         * @instance
         */
        SaveSettingReq.prototype.value = 0;

        /**
         * Creates a new SaveSettingReq instance using the specified properties.
         * @function create
         * @memberof game.SaveSettingReq
         * @static
         * @param {game.ISaveSettingReq=} [properties] Properties to set
         * @returns {game.SaveSettingReq} SaveSettingReq instance
         */
        SaveSettingReq.create = function create(properties) {
            return new SaveSettingReq(properties);
        };

        /**
         * Encodes the specified SaveSettingReq message. Does not implicitly {@link game.SaveSettingReq.verify|verify} messages.
         * @function encode
         * @memberof game.SaveSettingReq
         * @static
         * @param {game.ISaveSettingReq} message SaveSettingReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SaveSettingReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
            return writer;
        };

        /**
         * Encodes the specified SaveSettingReq message, length delimited. Does not implicitly {@link game.SaveSettingReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.SaveSettingReq
         * @static
         * @param {game.ISaveSettingReq} message SaveSettingReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SaveSettingReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SaveSettingReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.SaveSettingReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.SaveSettingReq} SaveSettingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SaveSettingReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.SaveSettingReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.key = reader.string();
                        break;
                    }
                case 2: {
                        message.value = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("key"))
                throw $util.ProtocolError("missing required 'key'", { instance: message });
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes a SaveSettingReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.SaveSettingReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.SaveSettingReq} SaveSettingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SaveSettingReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SaveSettingReq message.
         * @function verify
         * @memberof game.SaveSettingReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SaveSettingReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.key))
                return "key: string expected";
            if (!$util.isInteger(message.value))
                return "value: integer expected";
            return null;
        };

        /**
         * Creates a SaveSettingReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.SaveSettingReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.SaveSettingReq} SaveSettingReq
         */
        SaveSettingReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.SaveSettingReq)
                return object;
            let message = new $root.game.SaveSettingReq();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = object.value | 0;
            return message;
        };

        /**
         * Creates a plain object from a SaveSettingReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.SaveSettingReq
         * @static
         * @param {game.SaveSettingReq} message SaveSettingReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SaveSettingReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.key = "";
                object.value = 0;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this SaveSettingReq to JSON.
         * @function toJSON
         * @memberof game.SaveSettingReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SaveSettingReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SaveSettingReq
         * @function getTypeUrl
         * @memberof game.SaveSettingReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SaveSettingReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.SaveSettingReq";
        };

        return SaveSettingReq;
    })();

    game.SaveSettingRes = (function() {

        /**
         * Properties of a SaveSettingRes.
         * @memberof game
         * @interface ISaveSettingRes
         * @property {number} code SaveSettingRes code
         * @property {string|null} [msg] SaveSettingRes msg
         */

        /**
         * Constructs a new SaveSettingRes.
         * @memberof game
         * @classdesc Represents a SaveSettingRes.
         * @implements ISaveSettingRes
         * @constructor
         * @param {game.ISaveSettingRes=} [properties] Properties to set
         */
        function SaveSettingRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SaveSettingRes code.
         * @member {number} code
         * @memberof game.SaveSettingRes
         * @instance
         */
        SaveSettingRes.prototype.code = 0;

        /**
         * SaveSettingRes msg.
         * @member {string} msg
         * @memberof game.SaveSettingRes
         * @instance
         */
        SaveSettingRes.prototype.msg = "";

        /**
         * Creates a new SaveSettingRes instance using the specified properties.
         * @function create
         * @memberof game.SaveSettingRes
         * @static
         * @param {game.ISaveSettingRes=} [properties] Properties to set
         * @returns {game.SaveSettingRes} SaveSettingRes instance
         */
        SaveSettingRes.create = function create(properties) {
            return new SaveSettingRes(properties);
        };

        /**
         * Encodes the specified SaveSettingRes message. Does not implicitly {@link game.SaveSettingRes.verify|verify} messages.
         * @function encode
         * @memberof game.SaveSettingRes
         * @static
         * @param {game.ISaveSettingRes} message SaveSettingRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SaveSettingRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified SaveSettingRes message, length delimited. Does not implicitly {@link game.SaveSettingRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.SaveSettingRes
         * @static
         * @param {game.ISaveSettingRes} message SaveSettingRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SaveSettingRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SaveSettingRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.SaveSettingRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.SaveSettingRes} SaveSettingRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SaveSettingRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.SaveSettingRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a SaveSettingRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.SaveSettingRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.SaveSettingRes} SaveSettingRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SaveSettingRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SaveSettingRes message.
         * @function verify
         * @memberof game.SaveSettingRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SaveSettingRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a SaveSettingRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.SaveSettingRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.SaveSettingRes} SaveSettingRes
         */
        SaveSettingRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.SaveSettingRes)
                return object;
            let message = new $root.game.SaveSettingRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SaveSettingRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.SaveSettingRes
         * @static
         * @param {game.SaveSettingRes} message SaveSettingRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SaveSettingRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this SaveSettingRes to JSON.
         * @function toJSON
         * @memberof game.SaveSettingRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SaveSettingRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SaveSettingRes
         * @function getTypeUrl
         * @memberof game.SaveSettingRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SaveSettingRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.SaveSettingRes";
        };

        return SaveSettingRes;
    })();

    game.EnterMapReq = (function() {

        /**
         * Properties of an EnterMapReq.
         * @memberof game
         * @interface IEnterMapReq
         * @property {number} mapId EnterMapReq mapId
         */

        /**
         * Constructs a new EnterMapReq.
         * @memberof game
         * @classdesc Represents an EnterMapReq.
         * @implements IEnterMapReq
         * @constructor
         * @param {game.IEnterMapReq=} [properties] Properties to set
         */
        function EnterMapReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterMapReq mapId.
         * @member {number} mapId
         * @memberof game.EnterMapReq
         * @instance
         */
        EnterMapReq.prototype.mapId = 0;

        /**
         * Creates a new EnterMapReq instance using the specified properties.
         * @function create
         * @memberof game.EnterMapReq
         * @static
         * @param {game.IEnterMapReq=} [properties] Properties to set
         * @returns {game.EnterMapReq} EnterMapReq instance
         */
        EnterMapReq.create = function create(properties) {
            return new EnterMapReq(properties);
        };

        /**
         * Encodes the specified EnterMapReq message. Does not implicitly {@link game.EnterMapReq.verify|verify} messages.
         * @function encode
         * @memberof game.EnterMapReq
         * @static
         * @param {game.IEnterMapReq} message EnterMapReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterMapReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mapId);
            return writer;
        };

        /**
         * Encodes the specified EnterMapReq message, length delimited. Does not implicitly {@link game.EnterMapReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.EnterMapReq
         * @static
         * @param {game.IEnterMapReq} message EnterMapReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterMapReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterMapReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.EnterMapReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.EnterMapReq} EnterMapReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterMapReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.EnterMapReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.mapId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mapId"))
                throw $util.ProtocolError("missing required 'mapId'", { instance: message });
            return message;
        };

        /**
         * Decodes an EnterMapReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.EnterMapReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.EnterMapReq} EnterMapReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterMapReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterMapReq message.
         * @function verify
         * @memberof game.EnterMapReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterMapReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mapId))
                return "mapId: integer expected";
            return null;
        };

        /**
         * Creates an EnterMapReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.EnterMapReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.EnterMapReq} EnterMapReq
         */
        EnterMapReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.EnterMapReq)
                return object;
            let message = new $root.game.EnterMapReq();
            if (object.mapId != null)
                message.mapId = object.mapId | 0;
            return message;
        };

        /**
         * Creates a plain object from an EnterMapReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.EnterMapReq
         * @static
         * @param {game.EnterMapReq} message EnterMapReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterMapReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.mapId = 0;
            if (message.mapId != null && message.hasOwnProperty("mapId"))
                object.mapId = message.mapId;
            return object;
        };

        /**
         * Converts this EnterMapReq to JSON.
         * @function toJSON
         * @memberof game.EnterMapReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterMapReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EnterMapReq
         * @function getTypeUrl
         * @memberof game.EnterMapReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnterMapReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.EnterMapReq";
        };

        return EnterMapReq;
    })();

    game.EnterMapRes = (function() {

        /**
         * Properties of an EnterMapRes.
         * @memberof game
         * @interface IEnterMapRes
         * @property {number} code EnterMapRes code
         * @property {string|null} [msg] EnterMapRes msg
         */

        /**
         * Constructs a new EnterMapRes.
         * @memberof game
         * @classdesc Represents an EnterMapRes.
         * @implements IEnterMapRes
         * @constructor
         * @param {game.IEnterMapRes=} [properties] Properties to set
         */
        function EnterMapRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterMapRes code.
         * @member {number} code
         * @memberof game.EnterMapRes
         * @instance
         */
        EnterMapRes.prototype.code = 0;

        /**
         * EnterMapRes msg.
         * @member {string} msg
         * @memberof game.EnterMapRes
         * @instance
         */
        EnterMapRes.prototype.msg = "";

        /**
         * Creates a new EnterMapRes instance using the specified properties.
         * @function create
         * @memberof game.EnterMapRes
         * @static
         * @param {game.IEnterMapRes=} [properties] Properties to set
         * @returns {game.EnterMapRes} EnterMapRes instance
         */
        EnterMapRes.create = function create(properties) {
            return new EnterMapRes(properties);
        };

        /**
         * Encodes the specified EnterMapRes message. Does not implicitly {@link game.EnterMapRes.verify|verify} messages.
         * @function encode
         * @memberof game.EnterMapRes
         * @static
         * @param {game.IEnterMapRes} message EnterMapRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterMapRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified EnterMapRes message, length delimited. Does not implicitly {@link game.EnterMapRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.EnterMapRes
         * @static
         * @param {game.IEnterMapRes} message EnterMapRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterMapRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterMapRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.EnterMapRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.EnterMapRes} EnterMapRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterMapRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.EnterMapRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes an EnterMapRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.EnterMapRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.EnterMapRes} EnterMapRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterMapRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterMapRes message.
         * @function verify
         * @memberof game.EnterMapRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterMapRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates an EnterMapRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.EnterMapRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.EnterMapRes} EnterMapRes
         */
        EnterMapRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.EnterMapRes)
                return object;
            let message = new $root.game.EnterMapRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an EnterMapRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.EnterMapRes
         * @static
         * @param {game.EnterMapRes} message EnterMapRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterMapRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this EnterMapRes to JSON.
         * @function toJSON
         * @memberof game.EnterMapRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterMapRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EnterMapRes
         * @function getTypeUrl
         * @memberof game.EnterMapRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnterMapRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.EnterMapRes";
        };

        return EnterMapRes;
    })();

    game.RefreshMonsterReq = (function() {

        /**
         * Properties of a RefreshMonsterReq.
         * @memberof game
         * @interface IRefreshMonsterReq
         * @property {number} mapId RefreshMonsterReq mapId
         * @property {number} count RefreshMonsterReq count
         */

        /**
         * Constructs a new RefreshMonsterReq.
         * @memberof game
         * @classdesc Represents a RefreshMonsterReq.
         * @implements IRefreshMonsterReq
         * @constructor
         * @param {game.IRefreshMonsterReq=} [properties] Properties to set
         */
        function RefreshMonsterReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RefreshMonsterReq mapId.
         * @member {number} mapId
         * @memberof game.RefreshMonsterReq
         * @instance
         */
        RefreshMonsterReq.prototype.mapId = 0;

        /**
         * RefreshMonsterReq count.
         * @member {number} count
         * @memberof game.RefreshMonsterReq
         * @instance
         */
        RefreshMonsterReq.prototype.count = 0;

        /**
         * Creates a new RefreshMonsterReq instance using the specified properties.
         * @function create
         * @memberof game.RefreshMonsterReq
         * @static
         * @param {game.IRefreshMonsterReq=} [properties] Properties to set
         * @returns {game.RefreshMonsterReq} RefreshMonsterReq instance
         */
        RefreshMonsterReq.create = function create(properties) {
            return new RefreshMonsterReq(properties);
        };

        /**
         * Encodes the specified RefreshMonsterReq message. Does not implicitly {@link game.RefreshMonsterReq.verify|verify} messages.
         * @function encode
         * @memberof game.RefreshMonsterReq
         * @static
         * @param {game.IRefreshMonsterReq} message RefreshMonsterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshMonsterReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mapId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
            return writer;
        };

        /**
         * Encodes the specified RefreshMonsterReq message, length delimited. Does not implicitly {@link game.RefreshMonsterReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RefreshMonsterReq
         * @static
         * @param {game.IRefreshMonsterReq} message RefreshMonsterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshMonsterReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RefreshMonsterReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.RefreshMonsterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RefreshMonsterReq} RefreshMonsterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshMonsterReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.RefreshMonsterReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.mapId = reader.int32();
                        break;
                    }
                case 2: {
                        message.count = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mapId"))
                throw $util.ProtocolError("missing required 'mapId'", { instance: message });
            if (!message.hasOwnProperty("count"))
                throw $util.ProtocolError("missing required 'count'", { instance: message });
            return message;
        };

        /**
         * Decodes a RefreshMonsterReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RefreshMonsterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RefreshMonsterReq} RefreshMonsterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshMonsterReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RefreshMonsterReq message.
         * @function verify
         * @memberof game.RefreshMonsterReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RefreshMonsterReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mapId))
                return "mapId: integer expected";
            if (!$util.isInteger(message.count))
                return "count: integer expected";
            return null;
        };

        /**
         * Creates a RefreshMonsterReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RefreshMonsterReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RefreshMonsterReq} RefreshMonsterReq
         */
        RefreshMonsterReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.RefreshMonsterReq)
                return object;
            let message = new $root.game.RefreshMonsterReq();
            if (object.mapId != null)
                message.mapId = object.mapId | 0;
            if (object.count != null)
                message.count = object.count | 0;
            return message;
        };

        /**
         * Creates a plain object from a RefreshMonsterReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RefreshMonsterReq
         * @static
         * @param {game.RefreshMonsterReq} message RefreshMonsterReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RefreshMonsterReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.mapId = 0;
                object.count = 0;
            }
            if (message.mapId != null && message.hasOwnProperty("mapId"))
                object.mapId = message.mapId;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this RefreshMonsterReq to JSON.
         * @function toJSON
         * @memberof game.RefreshMonsterReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RefreshMonsterReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RefreshMonsterReq
         * @function getTypeUrl
         * @memberof game.RefreshMonsterReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RefreshMonsterReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.RefreshMonsterReq";
        };

        return RefreshMonsterReq;
    })();

    game.RefreshMonsterRes = (function() {

        /**
         * Properties of a RefreshMonsterRes.
         * @memberof game
         * @interface IRefreshMonsterRes
         * @property {number} code RefreshMonsterRes code
         * @property {string|null} [msg] RefreshMonsterRes msg
         * @property {Array.<number>|null} [monsters] RefreshMonsterRes monsters
         */

        /**
         * Constructs a new RefreshMonsterRes.
         * @memberof game
         * @classdesc Represents a RefreshMonsterRes.
         * @implements IRefreshMonsterRes
         * @constructor
         * @param {game.IRefreshMonsterRes=} [properties] Properties to set
         */
        function RefreshMonsterRes(properties) {
            this.monsters = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RefreshMonsterRes code.
         * @member {number} code
         * @memberof game.RefreshMonsterRes
         * @instance
         */
        RefreshMonsterRes.prototype.code = 0;

        /**
         * RefreshMonsterRes msg.
         * @member {string} msg
         * @memberof game.RefreshMonsterRes
         * @instance
         */
        RefreshMonsterRes.prototype.msg = "";

        /**
         * RefreshMonsterRes monsters.
         * @member {Array.<number>} monsters
         * @memberof game.RefreshMonsterRes
         * @instance
         */
        RefreshMonsterRes.prototype.monsters = $util.emptyArray;

        /**
         * Creates a new RefreshMonsterRes instance using the specified properties.
         * @function create
         * @memberof game.RefreshMonsterRes
         * @static
         * @param {game.IRefreshMonsterRes=} [properties] Properties to set
         * @returns {game.RefreshMonsterRes} RefreshMonsterRes instance
         */
        RefreshMonsterRes.create = function create(properties) {
            return new RefreshMonsterRes(properties);
        };

        /**
         * Encodes the specified RefreshMonsterRes message. Does not implicitly {@link game.RefreshMonsterRes.verify|verify} messages.
         * @function encode
         * @memberof game.RefreshMonsterRes
         * @static
         * @param {game.IRefreshMonsterRes} message RefreshMonsterRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshMonsterRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.monsters != null && message.monsters.length)
                for (let i = 0; i < message.monsters.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.monsters[i]);
            return writer;
        };

        /**
         * Encodes the specified RefreshMonsterRes message, length delimited. Does not implicitly {@link game.RefreshMonsterRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RefreshMonsterRes
         * @static
         * @param {game.IRefreshMonsterRes} message RefreshMonsterRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshMonsterRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RefreshMonsterRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.RefreshMonsterRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RefreshMonsterRes} RefreshMonsterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshMonsterRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.RefreshMonsterRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.monsters && message.monsters.length))
                            message.monsters = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.monsters.push(reader.int32());
                        } else
                            message.monsters.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a RefreshMonsterRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RefreshMonsterRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RefreshMonsterRes} RefreshMonsterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshMonsterRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RefreshMonsterRes message.
         * @function verify
         * @memberof game.RefreshMonsterRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RefreshMonsterRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.monsters != null && message.hasOwnProperty("monsters")) {
                if (!Array.isArray(message.monsters))
                    return "monsters: array expected";
                for (let i = 0; i < message.monsters.length; ++i)
                    if (!$util.isInteger(message.monsters[i]))
                        return "monsters: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a RefreshMonsterRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RefreshMonsterRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RefreshMonsterRes} RefreshMonsterRes
         */
        RefreshMonsterRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.RefreshMonsterRes)
                return object;
            let message = new $root.game.RefreshMonsterRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.monsters) {
                if (!Array.isArray(object.monsters))
                    throw TypeError(".game.RefreshMonsterRes.monsters: array expected");
                message.monsters = [];
                for (let i = 0; i < object.monsters.length; ++i)
                    message.monsters[i] = object.monsters[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a RefreshMonsterRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RefreshMonsterRes
         * @static
         * @param {game.RefreshMonsterRes} message RefreshMonsterRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RefreshMonsterRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.monsters = [];
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.monsters && message.monsters.length) {
                object.monsters = [];
                for (let j = 0; j < message.monsters.length; ++j)
                    object.monsters[j] = message.monsters[j];
            }
            return object;
        };

        /**
         * Converts this RefreshMonsterRes to JSON.
         * @function toJSON
         * @memberof game.RefreshMonsterRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RefreshMonsterRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RefreshMonsterRes
         * @function getTypeUrl
         * @memberof game.RefreshMonsterRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RefreshMonsterRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.RefreshMonsterRes";
        };

        return RefreshMonsterRes;
    })();

    game.UseMedicineReq = (function() {

        /**
         * Properties of a UseMedicineReq.
         * @memberof game
         * @interface IUseMedicineReq
         * @property {number} itemId UseMedicineReq itemId
         */

        /**
         * Constructs a new UseMedicineReq.
         * @memberof game
         * @classdesc Represents a UseMedicineReq.
         * @implements IUseMedicineReq
         * @constructor
         * @param {game.IUseMedicineReq=} [properties] Properties to set
         */
        function UseMedicineReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UseMedicineReq itemId.
         * @member {number} itemId
         * @memberof game.UseMedicineReq
         * @instance
         */
        UseMedicineReq.prototype.itemId = 0;

        /**
         * Creates a new UseMedicineReq instance using the specified properties.
         * @function create
         * @memberof game.UseMedicineReq
         * @static
         * @param {game.IUseMedicineReq=} [properties] Properties to set
         * @returns {game.UseMedicineReq} UseMedicineReq instance
         */
        UseMedicineReq.create = function create(properties) {
            return new UseMedicineReq(properties);
        };

        /**
         * Encodes the specified UseMedicineReq message. Does not implicitly {@link game.UseMedicineReq.verify|verify} messages.
         * @function encode
         * @memberof game.UseMedicineReq
         * @static
         * @param {game.IUseMedicineReq} message UseMedicineReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseMedicineReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            return writer;
        };

        /**
         * Encodes the specified UseMedicineReq message, length delimited. Does not implicitly {@link game.UseMedicineReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UseMedicineReq
         * @static
         * @param {game.IUseMedicineReq} message UseMedicineReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseMedicineReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UseMedicineReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.UseMedicineReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UseMedicineReq} UseMedicineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseMedicineReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.UseMedicineReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            return message;
        };

        /**
         * Decodes a UseMedicineReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UseMedicineReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UseMedicineReq} UseMedicineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseMedicineReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UseMedicineReq message.
         * @function verify
         * @memberof game.UseMedicineReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UseMedicineReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            return null;
        };

        /**
         * Creates a UseMedicineReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UseMedicineReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UseMedicineReq} UseMedicineReq
         */
        UseMedicineReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.UseMedicineReq)
                return object;
            let message = new $root.game.UseMedicineReq();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            return message;
        };

        /**
         * Creates a plain object from a UseMedicineReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UseMedicineReq
         * @static
         * @param {game.UseMedicineReq} message UseMedicineReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UseMedicineReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.itemId = 0;
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            return object;
        };

        /**
         * Converts this UseMedicineReq to JSON.
         * @function toJSON
         * @memberof game.UseMedicineReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UseMedicineReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UseMedicineReq
         * @function getTypeUrl
         * @memberof game.UseMedicineReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UseMedicineReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.UseMedicineReq";
        };

        return UseMedicineReq;
    })();

    game.UseMedicineRes = (function() {

        /**
         * Properties of a UseMedicineRes.
         * @memberof game
         * @interface IUseMedicineRes
         * @property {number} code UseMedicineRes code
         * @property {string|null} [msg] UseMedicineRes msg
         */

        /**
         * Constructs a new UseMedicineRes.
         * @memberof game
         * @classdesc Represents a UseMedicineRes.
         * @implements IUseMedicineRes
         * @constructor
         * @param {game.IUseMedicineRes=} [properties] Properties to set
         */
        function UseMedicineRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UseMedicineRes code.
         * @member {number} code
         * @memberof game.UseMedicineRes
         * @instance
         */
        UseMedicineRes.prototype.code = 0;

        /**
         * UseMedicineRes msg.
         * @member {string} msg
         * @memberof game.UseMedicineRes
         * @instance
         */
        UseMedicineRes.prototype.msg = "";

        /**
         * Creates a new UseMedicineRes instance using the specified properties.
         * @function create
         * @memberof game.UseMedicineRes
         * @static
         * @param {game.IUseMedicineRes=} [properties] Properties to set
         * @returns {game.UseMedicineRes} UseMedicineRes instance
         */
        UseMedicineRes.create = function create(properties) {
            return new UseMedicineRes(properties);
        };

        /**
         * Encodes the specified UseMedicineRes message. Does not implicitly {@link game.UseMedicineRes.verify|verify} messages.
         * @function encode
         * @memberof game.UseMedicineRes
         * @static
         * @param {game.IUseMedicineRes} message UseMedicineRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseMedicineRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified UseMedicineRes message, length delimited. Does not implicitly {@link game.UseMedicineRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UseMedicineRes
         * @static
         * @param {game.IUseMedicineRes} message UseMedicineRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseMedicineRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UseMedicineRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.UseMedicineRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UseMedicineRes} UseMedicineRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseMedicineRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.UseMedicineRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a UseMedicineRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UseMedicineRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UseMedicineRes} UseMedicineRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseMedicineRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UseMedicineRes message.
         * @function verify
         * @memberof game.UseMedicineRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UseMedicineRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a UseMedicineRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UseMedicineRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UseMedicineRes} UseMedicineRes
         */
        UseMedicineRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.UseMedicineRes)
                return object;
            let message = new $root.game.UseMedicineRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a UseMedicineRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UseMedicineRes
         * @static
         * @param {game.UseMedicineRes} message UseMedicineRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UseMedicineRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this UseMedicineRes to JSON.
         * @function toJSON
         * @memberof game.UseMedicineRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UseMedicineRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UseMedicineRes
         * @function getTypeUrl
         * @memberof game.UseMedicineRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UseMedicineRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.UseMedicineRes";
        };

        return UseMedicineRes;
    })();

    game.KillMonsterReq = (function() {

        /**
         * Properties of a KillMonsterReq.
         * @memberof game
         * @interface IKillMonsterReq
         * @property {number} monsterId KillMonsterReq monsterId
         * @property {number} mapId KillMonsterReq mapId
         */

        /**
         * Constructs a new KillMonsterReq.
         * @memberof game
         * @classdesc Represents a KillMonsterReq.
         * @implements IKillMonsterReq
         * @constructor
         * @param {game.IKillMonsterReq=} [properties] Properties to set
         */
        function KillMonsterReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KillMonsterReq monsterId.
         * @member {number} monsterId
         * @memberof game.KillMonsterReq
         * @instance
         */
        KillMonsterReq.prototype.monsterId = 0;

        /**
         * KillMonsterReq mapId.
         * @member {number} mapId
         * @memberof game.KillMonsterReq
         * @instance
         */
        KillMonsterReq.prototype.mapId = 0;

        /**
         * Creates a new KillMonsterReq instance using the specified properties.
         * @function create
         * @memberof game.KillMonsterReq
         * @static
         * @param {game.IKillMonsterReq=} [properties] Properties to set
         * @returns {game.KillMonsterReq} KillMonsterReq instance
         */
        KillMonsterReq.create = function create(properties) {
            return new KillMonsterReq(properties);
        };

        /**
         * Encodes the specified KillMonsterReq message. Does not implicitly {@link game.KillMonsterReq.verify|verify} messages.
         * @function encode
         * @memberof game.KillMonsterReq
         * @static
         * @param {game.IKillMonsterReq} message KillMonsterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KillMonsterReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.monsterId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mapId);
            return writer;
        };

        /**
         * Encodes the specified KillMonsterReq message, length delimited. Does not implicitly {@link game.KillMonsterReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.KillMonsterReq
         * @static
         * @param {game.IKillMonsterReq} message KillMonsterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KillMonsterReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KillMonsterReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.KillMonsterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.KillMonsterReq} KillMonsterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KillMonsterReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.KillMonsterReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.monsterId = reader.int32();
                        break;
                    }
                case 2: {
                        message.mapId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("monsterId"))
                throw $util.ProtocolError("missing required 'monsterId'", { instance: message });
            if (!message.hasOwnProperty("mapId"))
                throw $util.ProtocolError("missing required 'mapId'", { instance: message });
            return message;
        };

        /**
         * Decodes a KillMonsterReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.KillMonsterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.KillMonsterReq} KillMonsterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KillMonsterReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KillMonsterReq message.
         * @function verify
         * @memberof game.KillMonsterReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KillMonsterReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.monsterId))
                return "monsterId: integer expected";
            if (!$util.isInteger(message.mapId))
                return "mapId: integer expected";
            return null;
        };

        /**
         * Creates a KillMonsterReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.KillMonsterReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.KillMonsterReq} KillMonsterReq
         */
        KillMonsterReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.KillMonsterReq)
                return object;
            let message = new $root.game.KillMonsterReq();
            if (object.monsterId != null)
                message.monsterId = object.monsterId | 0;
            if (object.mapId != null)
                message.mapId = object.mapId | 0;
            return message;
        };

        /**
         * Creates a plain object from a KillMonsterReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.KillMonsterReq
         * @static
         * @param {game.KillMonsterReq} message KillMonsterReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KillMonsterReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.monsterId = 0;
                object.mapId = 0;
            }
            if (message.monsterId != null && message.hasOwnProperty("monsterId"))
                object.monsterId = message.monsterId;
            if (message.mapId != null && message.hasOwnProperty("mapId"))
                object.mapId = message.mapId;
            return object;
        };

        /**
         * Converts this KillMonsterReq to JSON.
         * @function toJSON
         * @memberof game.KillMonsterReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KillMonsterReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KillMonsterReq
         * @function getTypeUrl
         * @memberof game.KillMonsterReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KillMonsterReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.KillMonsterReq";
        };

        return KillMonsterReq;
    })();

    game.KillMonsterRes = (function() {

        /**
         * Properties of a KillMonsterRes.
         * @memberof game
         * @interface IKillMonsterRes
         * @property {number} code KillMonsterRes code
         * @property {string|null} [msg] KillMonsterRes msg
         * @property {number|null} [exp] KillMonsterRes exp
         * @property {game.IRewardCost|null} [reward] KillMonsterRes reward
         */

        /**
         * Constructs a new KillMonsterRes.
         * @memberof game
         * @classdesc Represents a KillMonsterRes.
         * @implements IKillMonsterRes
         * @constructor
         * @param {game.IKillMonsterRes=} [properties] Properties to set
         */
        function KillMonsterRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KillMonsterRes code.
         * @member {number} code
         * @memberof game.KillMonsterRes
         * @instance
         */
        KillMonsterRes.prototype.code = 0;

        /**
         * KillMonsterRes msg.
         * @member {string} msg
         * @memberof game.KillMonsterRes
         * @instance
         */
        KillMonsterRes.prototype.msg = "";

        /**
         * KillMonsterRes exp.
         * @member {number} exp
         * @memberof game.KillMonsterRes
         * @instance
         */
        KillMonsterRes.prototype.exp = 0;

        /**
         * KillMonsterRes reward.
         * @member {game.IRewardCost|null|undefined} reward
         * @memberof game.KillMonsterRes
         * @instance
         */
        KillMonsterRes.prototype.reward = null;

        /**
         * Creates a new KillMonsterRes instance using the specified properties.
         * @function create
         * @memberof game.KillMonsterRes
         * @static
         * @param {game.IKillMonsterRes=} [properties] Properties to set
         * @returns {game.KillMonsterRes} KillMonsterRes instance
         */
        KillMonsterRes.create = function create(properties) {
            return new KillMonsterRes(properties);
        };

        /**
         * Encodes the specified KillMonsterRes message. Does not implicitly {@link game.KillMonsterRes.verify|verify} messages.
         * @function encode
         * @memberof game.KillMonsterRes
         * @static
         * @param {game.IKillMonsterRes} message KillMonsterRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KillMonsterRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.exp != null && Object.hasOwnProperty.call(message, "exp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.exp);
            if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                $root.game.RewardCost.encode(message.reward, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified KillMonsterRes message, length delimited. Does not implicitly {@link game.KillMonsterRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.KillMonsterRes
         * @static
         * @param {game.IKillMonsterRes} message KillMonsterRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KillMonsterRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KillMonsterRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.KillMonsterRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.KillMonsterRes} KillMonsterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KillMonsterRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.KillMonsterRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.exp = reader.int32();
                        break;
                    }
                case 4: {
                        message.reward = $root.game.RewardCost.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a KillMonsterRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.KillMonsterRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.KillMonsterRes} KillMonsterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KillMonsterRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KillMonsterRes message.
         * @function verify
         * @memberof game.KillMonsterRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KillMonsterRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.exp != null && message.hasOwnProperty("exp"))
                if (!$util.isInteger(message.exp))
                    return "exp: integer expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                let error = $root.game.RewardCost.verify(message.reward);
                if (error)
                    return "reward." + error;
            }
            return null;
        };

        /**
         * Creates a KillMonsterRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.KillMonsterRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.KillMonsterRes} KillMonsterRes
         */
        KillMonsterRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.KillMonsterRes)
                return object;
            let message = new $root.game.KillMonsterRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.exp != null)
                message.exp = object.exp | 0;
            if (object.reward != null) {
                if (typeof object.reward !== "object")
                    throw TypeError(".game.KillMonsterRes.reward: object expected");
                message.reward = $root.game.RewardCost.fromObject(object.reward);
            }
            return message;
        };

        /**
         * Creates a plain object from a KillMonsterRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.KillMonsterRes
         * @static
         * @param {game.KillMonsterRes} message KillMonsterRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KillMonsterRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.exp = 0;
                object.reward = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.exp != null && message.hasOwnProperty("exp"))
                object.exp = message.exp;
            if (message.reward != null && message.hasOwnProperty("reward"))
                object.reward = $root.game.RewardCost.toObject(message.reward, options);
            return object;
        };

        /**
         * Converts this KillMonsterRes to JSON.
         * @function toJSON
         * @memberof game.KillMonsterRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KillMonsterRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KillMonsterRes
         * @function getTypeUrl
         * @memberof game.KillMonsterRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KillMonsterRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.KillMonsterRes";
        };

        return KillMonsterRes;
    })();

    game.GetItemReq = (function() {

        /**
         * Properties of a GetItemReq.
         * @memberof game
         * @interface IGetItemReq
         * @property {number} itemId GetItemReq itemId
         * @property {number} count GetItemReq count
         */

        /**
         * Constructs a new GetItemReq.
         * @memberof game
         * @classdesc Represents a GetItemReq.
         * @implements IGetItemReq
         * @constructor
         * @param {game.IGetItemReq=} [properties] Properties to set
         */
        function GetItemReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetItemReq itemId.
         * @member {number} itemId
         * @memberof game.GetItemReq
         * @instance
         */
        GetItemReq.prototype.itemId = 0;

        /**
         * GetItemReq count.
         * @member {number} count
         * @memberof game.GetItemReq
         * @instance
         */
        GetItemReq.prototype.count = 0;

        /**
         * Creates a new GetItemReq instance using the specified properties.
         * @function create
         * @memberof game.GetItemReq
         * @static
         * @param {game.IGetItemReq=} [properties] Properties to set
         * @returns {game.GetItemReq} GetItemReq instance
         */
        GetItemReq.create = function create(properties) {
            return new GetItemReq(properties);
        };

        /**
         * Encodes the specified GetItemReq message. Does not implicitly {@link game.GetItemReq.verify|verify} messages.
         * @function encode
         * @memberof game.GetItemReq
         * @static
         * @param {game.IGetItemReq} message GetItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetItemReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
            return writer;
        };

        /**
         * Encodes the specified GetItemReq message, length delimited. Does not implicitly {@link game.GetItemReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GetItemReq
         * @static
         * @param {game.IGetItemReq} message GetItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetItemReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetItemReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.GetItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GetItemReq} GetItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetItemReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GetItemReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.int32();
                        break;
                    }
                case 2: {
                        message.count = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            if (!message.hasOwnProperty("count"))
                throw $util.ProtocolError("missing required 'count'", { instance: message });
            return message;
        };

        /**
         * Decodes a GetItemReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GetItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GetItemReq} GetItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetItemReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetItemReq message.
         * @function verify
         * @memberof game.GetItemReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetItemReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (!$util.isInteger(message.count))
                return "count: integer expected";
            return null;
        };

        /**
         * Creates a GetItemReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GetItemReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GetItemReq} GetItemReq
         */
        GetItemReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GetItemReq)
                return object;
            let message = new $root.game.GetItemReq();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.count != null)
                message.count = object.count | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetItemReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GetItemReq
         * @static
         * @param {game.GetItemReq} message GetItemReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetItemReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.count = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this GetItemReq to JSON.
         * @function toJSON
         * @memberof game.GetItemReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetItemReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetItemReq
         * @function getTypeUrl
         * @memberof game.GetItemReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetItemReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.GetItemReq";
        };

        return GetItemReq;
    })();

    game.GetItemRes = (function() {

        /**
         * Properties of a GetItemRes.
         * @memberof game
         * @interface IGetItemRes
         * @property {number} code GetItemRes code
         * @property {string|null} [msg] GetItemRes msg
         * @property {game.IRewardCost|null} [reward] GetItemRes reward
         */

        /**
         * Constructs a new GetItemRes.
         * @memberof game
         * @classdesc Represents a GetItemRes.
         * @implements IGetItemRes
         * @constructor
         * @param {game.IGetItemRes=} [properties] Properties to set
         */
        function GetItemRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetItemRes code.
         * @member {number} code
         * @memberof game.GetItemRes
         * @instance
         */
        GetItemRes.prototype.code = 0;

        /**
         * GetItemRes msg.
         * @member {string} msg
         * @memberof game.GetItemRes
         * @instance
         */
        GetItemRes.prototype.msg = "";

        /**
         * GetItemRes reward.
         * @member {game.IRewardCost|null|undefined} reward
         * @memberof game.GetItemRes
         * @instance
         */
        GetItemRes.prototype.reward = null;

        /**
         * Creates a new GetItemRes instance using the specified properties.
         * @function create
         * @memberof game.GetItemRes
         * @static
         * @param {game.IGetItemRes=} [properties] Properties to set
         * @returns {game.GetItemRes} GetItemRes instance
         */
        GetItemRes.create = function create(properties) {
            return new GetItemRes(properties);
        };

        /**
         * Encodes the specified GetItemRes message. Does not implicitly {@link game.GetItemRes.verify|verify} messages.
         * @function encode
         * @memberof game.GetItemRes
         * @static
         * @param {game.IGetItemRes} message GetItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetItemRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                $root.game.RewardCost.encode(message.reward, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetItemRes message, length delimited. Does not implicitly {@link game.GetItemRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GetItemRes
         * @static
         * @param {game.IGetItemRes} message GetItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetItemRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetItemRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.GetItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GetItemRes} GetItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetItemRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GetItemRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.reward = $root.game.RewardCost.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a GetItemRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GetItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GetItemRes} GetItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetItemRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetItemRes message.
         * @function verify
         * @memberof game.GetItemRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetItemRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                let error = $root.game.RewardCost.verify(message.reward);
                if (error)
                    return "reward." + error;
            }
            return null;
        };

        /**
         * Creates a GetItemRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GetItemRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GetItemRes} GetItemRes
         */
        GetItemRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GetItemRes)
                return object;
            let message = new $root.game.GetItemRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.reward != null) {
                if (typeof object.reward !== "object")
                    throw TypeError(".game.GetItemRes.reward: object expected");
                message.reward = $root.game.RewardCost.fromObject(object.reward);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetItemRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GetItemRes
         * @static
         * @param {game.GetItemRes} message GetItemRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetItemRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.reward = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.reward != null && message.hasOwnProperty("reward"))
                object.reward = $root.game.RewardCost.toObject(message.reward, options);
            return object;
        };

        /**
         * Converts this GetItemRes to JSON.
         * @function toJSON
         * @memberof game.GetItemRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetItemRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetItemRes
         * @function getTypeUrl
         * @memberof game.GetItemRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetItemRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.GetItemRes";
        };

        return GetItemRes;
    })();

    game.RankInfo = (function() {

        /**
         * Properties of a RankInfo.
         * @memberof game
         * @interface IRankInfo
         * @property {number} playerId RankInfo playerId
         * @property {string} name RankInfo name
         * @property {number} job RankInfo job
         * @property {number} level RankInfo level
         * @property {number} rebirth RankInfo rebirth
         * @property {number} rankValue RankInfo rankValue
         */

        /**
         * Constructs a new RankInfo.
         * @memberof game
         * @classdesc Represents a RankInfo.
         * @implements IRankInfo
         * @constructor
         * @param {game.IRankInfo=} [properties] Properties to set
         */
        function RankInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankInfo playerId.
         * @member {number} playerId
         * @memberof game.RankInfo
         * @instance
         */
        RankInfo.prototype.playerId = 0;

        /**
         * RankInfo name.
         * @member {string} name
         * @memberof game.RankInfo
         * @instance
         */
        RankInfo.prototype.name = "";

        /**
         * RankInfo job.
         * @member {number} job
         * @memberof game.RankInfo
         * @instance
         */
        RankInfo.prototype.job = 0;

        /**
         * RankInfo level.
         * @member {number} level
         * @memberof game.RankInfo
         * @instance
         */
        RankInfo.prototype.level = 0;

        /**
         * RankInfo rebirth.
         * @member {number} rebirth
         * @memberof game.RankInfo
         * @instance
         */
        RankInfo.prototype.rebirth = 0;

        /**
         * RankInfo rankValue.
         * @member {number} rankValue
         * @memberof game.RankInfo
         * @instance
         */
        RankInfo.prototype.rankValue = 0;

        /**
         * Creates a new RankInfo instance using the specified properties.
         * @function create
         * @memberof game.RankInfo
         * @static
         * @param {game.IRankInfo=} [properties] Properties to set
         * @returns {game.RankInfo} RankInfo instance
         */
        RankInfo.create = function create(properties) {
            return new RankInfo(properties);
        };

        /**
         * Encodes the specified RankInfo message. Does not implicitly {@link game.RankInfo.verify|verify} messages.
         * @function encode
         * @memberof game.RankInfo
         * @static
         * @param {game.IRankInfo} message RankInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.job);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.rebirth);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.rankValue);
            return writer;
        };

        /**
         * Encodes the specified RankInfo message, length delimited. Does not implicitly {@link game.RankInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RankInfo
         * @static
         * @param {game.IRankInfo} message RankInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankInfo message from the specified reader or buffer.
         * @function decode
         * @memberof game.RankInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RankInfo} RankInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.RankInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.job = reader.int32();
                        break;
                    }
                case 4: {
                        message.level = reader.int32();
                        break;
                    }
                case 5: {
                        message.rebirth = reader.int32();
                        break;
                    }
                case 6: {
                        message.rankValue = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("job"))
                throw $util.ProtocolError("missing required 'job'", { instance: message });
            if (!message.hasOwnProperty("level"))
                throw $util.ProtocolError("missing required 'level'", { instance: message });
            if (!message.hasOwnProperty("rebirth"))
                throw $util.ProtocolError("missing required 'rebirth'", { instance: message });
            if (!message.hasOwnProperty("rankValue"))
                throw $util.ProtocolError("missing required 'rankValue'", { instance: message });
            return message;
        };

        /**
         * Decodes a RankInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RankInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RankInfo} RankInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankInfo message.
         * @function verify
         * @memberof game.RankInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.job))
                return "job: integer expected";
            if (!$util.isInteger(message.level))
                return "level: integer expected";
            if (!$util.isInteger(message.rebirth))
                return "rebirth: integer expected";
            if (!$util.isInteger(message.rankValue))
                return "rankValue: integer expected";
            return null;
        };

        /**
         * Creates a RankInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RankInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RankInfo} RankInfo
         */
        RankInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.game.RankInfo)
                return object;
            let message = new $root.game.RankInfo();
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.job != null)
                message.job = object.job | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.rebirth != null)
                message.rebirth = object.rebirth | 0;
            if (object.rankValue != null)
                message.rankValue = object.rankValue | 0;
            return message;
        };

        /**
         * Creates a plain object from a RankInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RankInfo
         * @static
         * @param {game.RankInfo} message RankInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RankInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.playerId = 0;
                object.name = "";
                object.job = 0;
                object.level = 0;
                object.rebirth = 0;
                object.rankValue = 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.job != null && message.hasOwnProperty("job"))
                object.job = message.job;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.rebirth != null && message.hasOwnProperty("rebirth"))
                object.rebirth = message.rebirth;
            if (message.rankValue != null && message.hasOwnProperty("rankValue"))
                object.rankValue = message.rankValue;
            return object;
        };

        /**
         * Converts this RankInfo to JSON.
         * @function toJSON
         * @memberof game.RankInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RankInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RankInfo
         * @function getTypeUrl
         * @memberof game.RankInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RankInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.RankInfo";
        };

        return RankInfo;
    })();

    game.GetRankReq = (function() {

        /**
         * Properties of a GetRankReq.
         * @memberof game
         * @interface IGetRankReq
         * @property {number} type GetRankReq type
         */

        /**
         * Constructs a new GetRankReq.
         * @memberof game
         * @classdesc Represents a GetRankReq.
         * @implements IGetRankReq
         * @constructor
         * @param {game.IGetRankReq=} [properties] Properties to set
         */
        function GetRankReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRankReq type.
         * @member {number} type
         * @memberof game.GetRankReq
         * @instance
         */
        GetRankReq.prototype.type = 0;

        /**
         * Creates a new GetRankReq instance using the specified properties.
         * @function create
         * @memberof game.GetRankReq
         * @static
         * @param {game.IGetRankReq=} [properties] Properties to set
         * @returns {game.GetRankReq} GetRankReq instance
         */
        GetRankReq.create = function create(properties) {
            return new GetRankReq(properties);
        };

        /**
         * Encodes the specified GetRankReq message. Does not implicitly {@link game.GetRankReq.verify|verify} messages.
         * @function encode
         * @memberof game.GetRankReq
         * @static
         * @param {game.IGetRankReq} message GetRankReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRankReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified GetRankReq message, length delimited. Does not implicitly {@link game.GetRankReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GetRankReq
         * @static
         * @param {game.IGetRankReq} message GetRankReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRankReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRankReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.GetRankReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GetRankReq} GetRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRankReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GetRankReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a GetRankReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GetRankReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GetRankReq} GetRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRankReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRankReq message.
         * @function verify
         * @memberof game.GetRankReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRankReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            return null;
        };

        /**
         * Creates a GetRankReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GetRankReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GetRankReq} GetRankReq
         */
        GetRankReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GetRankReq)
                return object;
            let message = new $root.game.GetRankReq();
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetRankReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GetRankReq
         * @static
         * @param {game.GetRankReq} message GetRankReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRankReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.type = 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this GetRankReq to JSON.
         * @function toJSON
         * @memberof game.GetRankReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRankReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetRankReq
         * @function getTypeUrl
         * @memberof game.GetRankReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetRankReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.GetRankReq";
        };

        return GetRankReq;
    })();

    game.GetRankRes = (function() {

        /**
         * Properties of a GetRankRes.
         * @memberof game
         * @interface IGetRankRes
         * @property {number} code GetRankRes code
         * @property {string|null} [msg] GetRankRes msg
         * @property {Array.<game.IRankInfo>|null} [ranks] GetRankRes ranks
         */

        /**
         * Constructs a new GetRankRes.
         * @memberof game
         * @classdesc Represents a GetRankRes.
         * @implements IGetRankRes
         * @constructor
         * @param {game.IGetRankRes=} [properties] Properties to set
         */
        function GetRankRes(properties) {
            this.ranks = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRankRes code.
         * @member {number} code
         * @memberof game.GetRankRes
         * @instance
         */
        GetRankRes.prototype.code = 0;

        /**
         * GetRankRes msg.
         * @member {string} msg
         * @memberof game.GetRankRes
         * @instance
         */
        GetRankRes.prototype.msg = "";

        /**
         * GetRankRes ranks.
         * @member {Array.<game.IRankInfo>} ranks
         * @memberof game.GetRankRes
         * @instance
         */
        GetRankRes.prototype.ranks = $util.emptyArray;

        /**
         * Creates a new GetRankRes instance using the specified properties.
         * @function create
         * @memberof game.GetRankRes
         * @static
         * @param {game.IGetRankRes=} [properties] Properties to set
         * @returns {game.GetRankRes} GetRankRes instance
         */
        GetRankRes.create = function create(properties) {
            return new GetRankRes(properties);
        };

        /**
         * Encodes the specified GetRankRes message. Does not implicitly {@link game.GetRankRes.verify|verify} messages.
         * @function encode
         * @memberof game.GetRankRes
         * @static
         * @param {game.IGetRankRes} message GetRankRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRankRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.ranks != null && message.ranks.length)
                for (let i = 0; i < message.ranks.length; ++i)
                    $root.game.RankInfo.encode(message.ranks[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetRankRes message, length delimited. Does not implicitly {@link game.GetRankRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GetRankRes
         * @static
         * @param {game.IGetRankRes} message GetRankRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRankRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRankRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.GetRankRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GetRankRes} GetRankRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRankRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GetRankRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.ranks && message.ranks.length))
                            message.ranks = [];
                        message.ranks.push($root.game.RankInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a GetRankRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GetRankRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GetRankRes} GetRankRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRankRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRankRes message.
         * @function verify
         * @memberof game.GetRankRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRankRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.ranks != null && message.hasOwnProperty("ranks")) {
                if (!Array.isArray(message.ranks))
                    return "ranks: array expected";
                for (let i = 0; i < message.ranks.length; ++i) {
                    let error = $root.game.RankInfo.verify(message.ranks[i]);
                    if (error)
                        return "ranks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetRankRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GetRankRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GetRankRes} GetRankRes
         */
        GetRankRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GetRankRes)
                return object;
            let message = new $root.game.GetRankRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.ranks) {
                if (!Array.isArray(object.ranks))
                    throw TypeError(".game.GetRankRes.ranks: array expected");
                message.ranks = [];
                for (let i = 0; i < object.ranks.length; ++i) {
                    if (typeof object.ranks[i] !== "object")
                        throw TypeError(".game.GetRankRes.ranks: object expected");
                    message.ranks[i] = $root.game.RankInfo.fromObject(object.ranks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetRankRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GetRankRes
         * @static
         * @param {game.GetRankRes} message GetRankRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRankRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.ranks = [];
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.ranks && message.ranks.length) {
                object.ranks = [];
                for (let j = 0; j < message.ranks.length; ++j)
                    object.ranks[j] = $root.game.RankInfo.toObject(message.ranks[j], options);
            }
            return object;
        };

        /**
         * Converts this GetRankRes to JSON.
         * @function toJSON
         * @memberof game.GetRankRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRankRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetRankRes
         * @function getTypeUrl
         * @memberof game.GetRankRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetRankRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.GetRankRes";
        };

        return GetRankRes;
    })();

    game.BuyItemReq = (function() {

        /**
         * Properties of a BuyItemReq.
         * @memberof game
         * @interface IBuyItemReq
         * @property {number} shopId BuyItemReq shopId
         * @property {number} count BuyItemReq count
         */

        /**
         * Constructs a new BuyItemReq.
         * @memberof game
         * @classdesc Represents a BuyItemReq.
         * @implements IBuyItemReq
         * @constructor
         * @param {game.IBuyItemReq=} [properties] Properties to set
         */
        function BuyItemReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuyItemReq shopId.
         * @member {number} shopId
         * @memberof game.BuyItemReq
         * @instance
         */
        BuyItemReq.prototype.shopId = 0;

        /**
         * BuyItemReq count.
         * @member {number} count
         * @memberof game.BuyItemReq
         * @instance
         */
        BuyItemReq.prototype.count = 0;

        /**
         * Creates a new BuyItemReq instance using the specified properties.
         * @function create
         * @memberof game.BuyItemReq
         * @static
         * @param {game.IBuyItemReq=} [properties] Properties to set
         * @returns {game.BuyItemReq} BuyItemReq instance
         */
        BuyItemReq.create = function create(properties) {
            return new BuyItemReq(properties);
        };

        /**
         * Encodes the specified BuyItemReq message. Does not implicitly {@link game.BuyItemReq.verify|verify} messages.
         * @function encode
         * @memberof game.BuyItemReq
         * @static
         * @param {game.IBuyItemReq} message BuyItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyItemReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.shopId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
            return writer;
        };

        /**
         * Encodes the specified BuyItemReq message, length delimited. Does not implicitly {@link game.BuyItemReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BuyItemReq
         * @static
         * @param {game.IBuyItemReq} message BuyItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyItemReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuyItemReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.BuyItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BuyItemReq} BuyItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyItemReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BuyItemReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.shopId = reader.int32();
                        break;
                    }
                case 2: {
                        message.count = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("shopId"))
                throw $util.ProtocolError("missing required 'shopId'", { instance: message });
            if (!message.hasOwnProperty("count"))
                throw $util.ProtocolError("missing required 'count'", { instance: message });
            return message;
        };

        /**
         * Decodes a BuyItemReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BuyItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BuyItemReq} BuyItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyItemReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BuyItemReq message.
         * @function verify
         * @memberof game.BuyItemReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BuyItemReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.shopId))
                return "shopId: integer expected";
            if (!$util.isInteger(message.count))
                return "count: integer expected";
            return null;
        };

        /**
         * Creates a BuyItemReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BuyItemReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BuyItemReq} BuyItemReq
         */
        BuyItemReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BuyItemReq)
                return object;
            let message = new $root.game.BuyItemReq();
            if (object.shopId != null)
                message.shopId = object.shopId | 0;
            if (object.count != null)
                message.count = object.count | 0;
            return message;
        };

        /**
         * Creates a plain object from a BuyItemReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BuyItemReq
         * @static
         * @param {game.BuyItemReq} message BuyItemReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuyItemReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.shopId = 0;
                object.count = 0;
            }
            if (message.shopId != null && message.hasOwnProperty("shopId"))
                object.shopId = message.shopId;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this BuyItemReq to JSON.
         * @function toJSON
         * @memberof game.BuyItemReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuyItemReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BuyItemReq
         * @function getTypeUrl
         * @memberof game.BuyItemReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BuyItemReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.BuyItemReq";
        };

        return BuyItemReq;
    })();

    game.BuyItemRes = (function() {

        /**
         * Properties of a BuyItemRes.
         * @memberof game
         * @interface IBuyItemRes
         * @property {number} code BuyItemRes code
         * @property {string|null} [msg] BuyItemRes msg
         * @property {game.IRewardCost|null} [reward] BuyItemRes reward
         * @property {number|null} [gold] BuyItemRes gold
         * @property {number|null} [yuanbao] BuyItemRes yuanbao
         */

        /**
         * Constructs a new BuyItemRes.
         * @memberof game
         * @classdesc Represents a BuyItemRes.
         * @implements IBuyItemRes
         * @constructor
         * @param {game.IBuyItemRes=} [properties] Properties to set
         */
        function BuyItemRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuyItemRes code.
         * @member {number} code
         * @memberof game.BuyItemRes
         * @instance
         */
        BuyItemRes.prototype.code = 0;

        /**
         * BuyItemRes msg.
         * @member {string} msg
         * @memberof game.BuyItemRes
         * @instance
         */
        BuyItemRes.prototype.msg = "";

        /**
         * BuyItemRes reward.
         * @member {game.IRewardCost|null|undefined} reward
         * @memberof game.BuyItemRes
         * @instance
         */
        BuyItemRes.prototype.reward = null;

        /**
         * BuyItemRes gold.
         * @member {number} gold
         * @memberof game.BuyItemRes
         * @instance
         */
        BuyItemRes.prototype.gold = 0;

        /**
         * BuyItemRes yuanbao.
         * @member {number} yuanbao
         * @memberof game.BuyItemRes
         * @instance
         */
        BuyItemRes.prototype.yuanbao = 0;

        /**
         * Creates a new BuyItemRes instance using the specified properties.
         * @function create
         * @memberof game.BuyItemRes
         * @static
         * @param {game.IBuyItemRes=} [properties] Properties to set
         * @returns {game.BuyItemRes} BuyItemRes instance
         */
        BuyItemRes.create = function create(properties) {
            return new BuyItemRes(properties);
        };

        /**
         * Encodes the specified BuyItemRes message. Does not implicitly {@link game.BuyItemRes.verify|verify} messages.
         * @function encode
         * @memberof game.BuyItemRes
         * @static
         * @param {game.IBuyItemRes} message BuyItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyItemRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                $root.game.RewardCost.encode(message.reward, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gold);
            if (message.yuanbao != null && Object.hasOwnProperty.call(message, "yuanbao"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.yuanbao);
            return writer;
        };

        /**
         * Encodes the specified BuyItemRes message, length delimited. Does not implicitly {@link game.BuyItemRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BuyItemRes
         * @static
         * @param {game.IBuyItemRes} message BuyItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyItemRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuyItemRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.BuyItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BuyItemRes} BuyItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyItemRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BuyItemRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.reward = $root.game.RewardCost.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.gold = reader.int32();
                        break;
                    }
                case 5: {
                        message.yuanbao = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a BuyItemRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BuyItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BuyItemRes} BuyItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyItemRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BuyItemRes message.
         * @function verify
         * @memberof game.BuyItemRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BuyItemRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                let error = $root.game.RewardCost.verify(message.reward);
                if (error)
                    return "reward." + error;
            }
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold))
                    return "gold: integer expected";
            if (message.yuanbao != null && message.hasOwnProperty("yuanbao"))
                if (!$util.isInteger(message.yuanbao))
                    return "yuanbao: integer expected";
            return null;
        };

        /**
         * Creates a BuyItemRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BuyItemRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BuyItemRes} BuyItemRes
         */
        BuyItemRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BuyItemRes)
                return object;
            let message = new $root.game.BuyItemRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.reward != null) {
                if (typeof object.reward !== "object")
                    throw TypeError(".game.BuyItemRes.reward: object expected");
                message.reward = $root.game.RewardCost.fromObject(object.reward);
            }
            if (object.gold != null)
                message.gold = object.gold | 0;
            if (object.yuanbao != null)
                message.yuanbao = object.yuanbao | 0;
            return message;
        };

        /**
         * Creates a plain object from a BuyItemRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BuyItemRes
         * @static
         * @param {game.BuyItemRes} message BuyItemRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuyItemRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.reward = null;
                object.gold = 0;
                object.yuanbao = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.reward != null && message.hasOwnProperty("reward"))
                object.reward = $root.game.RewardCost.toObject(message.reward, options);
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.yuanbao != null && message.hasOwnProperty("yuanbao"))
                object.yuanbao = message.yuanbao;
            return object;
        };

        /**
         * Converts this BuyItemRes to JSON.
         * @function toJSON
         * @memberof game.BuyItemRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuyItemRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BuyItemRes
         * @function getTypeUrl
         * @memberof game.BuyItemRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BuyItemRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.BuyItemRes";
        };

        return BuyItemRes;
    })();

    game.Growth = (function() {

        /**
         * Properties of a Growth.
         * @memberof game
         * @interface IGrowth
         * @property {number} id Growth id
         * @property {number} cfgId Growth cfgId
         * @property {number} type Growth type
         */

        /**
         * Constructs a new Growth.
         * @memberof game
         * @classdesc Represents a Growth.
         * @implements IGrowth
         * @constructor
         * @param {game.IGrowth=} [properties] Properties to set
         */
        function Growth(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Growth id.
         * @member {number} id
         * @memberof game.Growth
         * @instance
         */
        Growth.prototype.id = 0;

        /**
         * Growth cfgId.
         * @member {number} cfgId
         * @memberof game.Growth
         * @instance
         */
        Growth.prototype.cfgId = 0;

        /**
         * Growth type.
         * @member {number} type
         * @memberof game.Growth
         * @instance
         */
        Growth.prototype.type = 0;

        /**
         * Creates a new Growth instance using the specified properties.
         * @function create
         * @memberof game.Growth
         * @static
         * @param {game.IGrowth=} [properties] Properties to set
         * @returns {game.Growth} Growth instance
         */
        Growth.create = function create(properties) {
            return new Growth(properties);
        };

        /**
         * Encodes the specified Growth message. Does not implicitly {@link game.Growth.verify|verify} messages.
         * @function encode
         * @memberof game.Growth
         * @static
         * @param {game.IGrowth} message Growth message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Growth.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cfgId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified Growth message, length delimited. Does not implicitly {@link game.Growth.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Growth
         * @static
         * @param {game.IGrowth} message Growth message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Growth.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Growth message from the specified reader or buffer.
         * @function decode
         * @memberof game.Growth
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Growth} Growth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Growth.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Growth();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.cfgId = reader.int32();
                        break;
                    }
                case 3: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("cfgId"))
                throw $util.ProtocolError("missing required 'cfgId'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a Growth message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Growth
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Growth} Growth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Growth.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Growth message.
         * @function verify
         * @memberof game.Growth
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Growth.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.cfgId))
                return "cfgId: integer expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            return null;
        };

        /**
         * Creates a Growth message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Growth
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Growth} Growth
         */
        Growth.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Growth)
                return object;
            let message = new $root.game.Growth();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.cfgId != null)
                message.cfgId = object.cfgId | 0;
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a Growth message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Growth
         * @static
         * @param {game.Growth} message Growth
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Growth.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.cfgId = 0;
                object.type = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.cfgId != null && message.hasOwnProperty("cfgId"))
                object.cfgId = message.cfgId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this Growth to JSON.
         * @function toJSON
         * @memberof game.Growth
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Growth.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Growth
         * @function getTypeUrl
         * @memberof game.Growth
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Growth.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Growth";
        };

        return Growth;
    })();

    game.GrowthReceiveReq = (function() {

        /**
         * Properties of a GrowthReceiveReq.
         * @memberof game
         * @interface IGrowthReceiveReq
         * @property {number} type GrowthReceiveReq type
         * @property {number} cfgId GrowthReceiveReq cfgId
         */

        /**
         * Constructs a new GrowthReceiveReq.
         * @memberof game
         * @classdesc Represents a GrowthReceiveReq.
         * @implements IGrowthReceiveReq
         * @constructor
         * @param {game.IGrowthReceiveReq=} [properties] Properties to set
         */
        function GrowthReceiveReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GrowthReceiveReq type.
         * @member {number} type
         * @memberof game.GrowthReceiveReq
         * @instance
         */
        GrowthReceiveReq.prototype.type = 0;

        /**
         * GrowthReceiveReq cfgId.
         * @member {number} cfgId
         * @memberof game.GrowthReceiveReq
         * @instance
         */
        GrowthReceiveReq.prototype.cfgId = 0;

        /**
         * Creates a new GrowthReceiveReq instance using the specified properties.
         * @function create
         * @memberof game.GrowthReceiveReq
         * @static
         * @param {game.IGrowthReceiveReq=} [properties] Properties to set
         * @returns {game.GrowthReceiveReq} GrowthReceiveReq instance
         */
        GrowthReceiveReq.create = function create(properties) {
            return new GrowthReceiveReq(properties);
        };

        /**
         * Encodes the specified GrowthReceiveReq message. Does not implicitly {@link game.GrowthReceiveReq.verify|verify} messages.
         * @function encode
         * @memberof game.GrowthReceiveReq
         * @static
         * @param {game.IGrowthReceiveReq} message GrowthReceiveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GrowthReceiveReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cfgId);
            return writer;
        };

        /**
         * Encodes the specified GrowthReceiveReq message, length delimited. Does not implicitly {@link game.GrowthReceiveReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GrowthReceiveReq
         * @static
         * @param {game.IGrowthReceiveReq} message GrowthReceiveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GrowthReceiveReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GrowthReceiveReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.GrowthReceiveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GrowthReceiveReq} GrowthReceiveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GrowthReceiveReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GrowthReceiveReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.cfgId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("cfgId"))
                throw $util.ProtocolError("missing required 'cfgId'", { instance: message });
            return message;
        };

        /**
         * Decodes a GrowthReceiveReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GrowthReceiveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GrowthReceiveReq} GrowthReceiveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GrowthReceiveReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GrowthReceiveReq message.
         * @function verify
         * @memberof game.GrowthReceiveReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GrowthReceiveReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isInteger(message.cfgId))
                return "cfgId: integer expected";
            return null;
        };

        /**
         * Creates a GrowthReceiveReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GrowthReceiveReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GrowthReceiveReq} GrowthReceiveReq
         */
        GrowthReceiveReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GrowthReceiveReq)
                return object;
            let message = new $root.game.GrowthReceiveReq();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.cfgId != null)
                message.cfgId = object.cfgId | 0;
            return message;
        };

        /**
         * Creates a plain object from a GrowthReceiveReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GrowthReceiveReq
         * @static
         * @param {game.GrowthReceiveReq} message GrowthReceiveReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GrowthReceiveReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = 0;
                object.cfgId = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.cfgId != null && message.hasOwnProperty("cfgId"))
                object.cfgId = message.cfgId;
            return object;
        };

        /**
         * Converts this GrowthReceiveReq to JSON.
         * @function toJSON
         * @memberof game.GrowthReceiveReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GrowthReceiveReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GrowthReceiveReq
         * @function getTypeUrl
         * @memberof game.GrowthReceiveReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GrowthReceiveReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.GrowthReceiveReq";
        };

        return GrowthReceiveReq;
    })();

    game.GrowthReceiveRes = (function() {

        /**
         * Properties of a GrowthReceiveRes.
         * @memberof game
         * @interface IGrowthReceiveRes
         * @property {number} code GrowthReceiveRes code
         * @property {string|null} [msg] GrowthReceiveRes msg
         * @property {game.IRewardCost|null} [reward] GrowthReceiveRes reward
         */

        /**
         * Constructs a new GrowthReceiveRes.
         * @memberof game
         * @classdesc Represents a GrowthReceiveRes.
         * @implements IGrowthReceiveRes
         * @constructor
         * @param {game.IGrowthReceiveRes=} [properties] Properties to set
         */
        function GrowthReceiveRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GrowthReceiveRes code.
         * @member {number} code
         * @memberof game.GrowthReceiveRes
         * @instance
         */
        GrowthReceiveRes.prototype.code = 0;

        /**
         * GrowthReceiveRes msg.
         * @member {string} msg
         * @memberof game.GrowthReceiveRes
         * @instance
         */
        GrowthReceiveRes.prototype.msg = "";

        /**
         * GrowthReceiveRes reward.
         * @member {game.IRewardCost|null|undefined} reward
         * @memberof game.GrowthReceiveRes
         * @instance
         */
        GrowthReceiveRes.prototype.reward = null;

        /**
         * Creates a new GrowthReceiveRes instance using the specified properties.
         * @function create
         * @memberof game.GrowthReceiveRes
         * @static
         * @param {game.IGrowthReceiveRes=} [properties] Properties to set
         * @returns {game.GrowthReceiveRes} GrowthReceiveRes instance
         */
        GrowthReceiveRes.create = function create(properties) {
            return new GrowthReceiveRes(properties);
        };

        /**
         * Encodes the specified GrowthReceiveRes message. Does not implicitly {@link game.GrowthReceiveRes.verify|verify} messages.
         * @function encode
         * @memberof game.GrowthReceiveRes
         * @static
         * @param {game.IGrowthReceiveRes} message GrowthReceiveRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GrowthReceiveRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                $root.game.RewardCost.encode(message.reward, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GrowthReceiveRes message, length delimited. Does not implicitly {@link game.GrowthReceiveRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GrowthReceiveRes
         * @static
         * @param {game.IGrowthReceiveRes} message GrowthReceiveRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GrowthReceiveRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GrowthReceiveRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.GrowthReceiveRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GrowthReceiveRes} GrowthReceiveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GrowthReceiveRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GrowthReceiveRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.reward = $root.game.RewardCost.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a GrowthReceiveRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GrowthReceiveRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GrowthReceiveRes} GrowthReceiveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GrowthReceiveRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GrowthReceiveRes message.
         * @function verify
         * @memberof game.GrowthReceiveRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GrowthReceiveRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                let error = $root.game.RewardCost.verify(message.reward);
                if (error)
                    return "reward." + error;
            }
            return null;
        };

        /**
         * Creates a GrowthReceiveRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GrowthReceiveRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GrowthReceiveRes} GrowthReceiveRes
         */
        GrowthReceiveRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GrowthReceiveRes)
                return object;
            let message = new $root.game.GrowthReceiveRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.reward != null) {
                if (typeof object.reward !== "object")
                    throw TypeError(".game.GrowthReceiveRes.reward: object expected");
                message.reward = $root.game.RewardCost.fromObject(object.reward);
            }
            return message;
        };

        /**
         * Creates a plain object from a GrowthReceiveRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GrowthReceiveRes
         * @static
         * @param {game.GrowthReceiveRes} message GrowthReceiveRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GrowthReceiveRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.reward = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.reward != null && message.hasOwnProperty("reward"))
                object.reward = $root.game.RewardCost.toObject(message.reward, options);
            return object;
        };

        /**
         * Converts this GrowthReceiveRes to JSON.
         * @function toJSON
         * @memberof game.GrowthReceiveRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GrowthReceiveRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GrowthReceiveRes
         * @function getTypeUrl
         * @memberof game.GrowthReceiveRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GrowthReceiveRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.GrowthReceiveRes";
        };

        return GrowthReceiveRes;
    })();

    game.Mail = (function() {

        /**
         * Properties of a Mail.
         * @memberof game
         * @interface IMail
         * @property {number} id Mail id
         * @property {number} type Mail type
         * @property {string} title Mail title
         * @property {string} content Mail content
         * @property {string} rewards Mail rewards
         * @property {number|Long} startTime Mail startTime
         * @property {number|Long} receiveTime Mail receiveTime
         */

        /**
         * Constructs a new Mail.
         * @memberof game
         * @classdesc Represents a Mail.
         * @implements IMail
         * @constructor
         * @param {game.IMail=} [properties] Properties to set
         */
        function Mail(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Mail id.
         * @member {number} id
         * @memberof game.Mail
         * @instance
         */
        Mail.prototype.id = 0;

        /**
         * Mail type.
         * @member {number} type
         * @memberof game.Mail
         * @instance
         */
        Mail.prototype.type = 0;

        /**
         * Mail title.
         * @member {string} title
         * @memberof game.Mail
         * @instance
         */
        Mail.prototype.title = "";

        /**
         * Mail content.
         * @member {string} content
         * @memberof game.Mail
         * @instance
         */
        Mail.prototype.content = "";

        /**
         * Mail rewards.
         * @member {string} rewards
         * @memberof game.Mail
         * @instance
         */
        Mail.prototype.rewards = "";

        /**
         * Mail startTime.
         * @member {number|Long} startTime
         * @memberof game.Mail
         * @instance
         */
        Mail.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Mail receiveTime.
         * @member {number|Long} receiveTime
         * @memberof game.Mail
         * @instance
         */
        Mail.prototype.receiveTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Mail instance using the specified properties.
         * @function create
         * @memberof game.Mail
         * @static
         * @param {game.IMail=} [properties] Properties to set
         * @returns {game.Mail} Mail instance
         */
        Mail.create = function create(properties) {
            return new Mail(properties);
        };

        /**
         * Encodes the specified Mail message. Does not implicitly {@link game.Mail.verify|verify} messages.
         * @function encode
         * @memberof game.Mail
         * @static
         * @param {game.IMail} message Mail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.rewards);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.startTime);
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.receiveTime);
            return writer;
        };

        /**
         * Encodes the specified Mail message, length delimited. Does not implicitly {@link game.Mail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Mail
         * @static
         * @param {game.IMail} message Mail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Mail message from the specified reader or buffer.
         * @function decode
         * @memberof game.Mail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Mail} Mail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Mail();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                case 3: {
                        message.title = reader.string();
                        break;
                    }
                case 4: {
                        message.content = reader.string();
                        break;
                    }
                case 5: {
                        message.rewards = reader.string();
                        break;
                    }
                case 6: {
                        message.startTime = reader.int64();
                        break;
                    }
                case 7: {
                        message.receiveTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("title"))
                throw $util.ProtocolError("missing required 'title'", { instance: message });
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            if (!message.hasOwnProperty("rewards"))
                throw $util.ProtocolError("missing required 'rewards'", { instance: message });
            if (!message.hasOwnProperty("startTime"))
                throw $util.ProtocolError("missing required 'startTime'", { instance: message });
            if (!message.hasOwnProperty("receiveTime"))
                throw $util.ProtocolError("missing required 'receiveTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a Mail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Mail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Mail} Mail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Mail message.
         * @function verify
         * @memberof game.Mail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Mail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isString(message.title))
                return "title: string expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            if (!$util.isString(message.rewards))
                return "rewards: string expected";
            if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                return "startTime: integer|Long expected";
            if (!$util.isInteger(message.receiveTime) && !(message.receiveTime && $util.isInteger(message.receiveTime.low) && $util.isInteger(message.receiveTime.high)))
                return "receiveTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a Mail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Mail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Mail} Mail
         */
        Mail.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Mail)
                return object;
            let message = new $root.game.Mail();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.title != null)
                message.title = String(object.title);
            if (object.content != null)
                message.content = String(object.content);
            if (object.rewards != null)
                message.rewards = String(object.rewards);
            if (object.startTime != null)
                if ($util.Long)
                    (message.startTime = $util.Long.fromValue(object.startTime)).unsigned = false;
                else if (typeof object.startTime === "string")
                    message.startTime = parseInt(object.startTime, 10);
                else if (typeof object.startTime === "number")
                    message.startTime = object.startTime;
                else if (typeof object.startTime === "object")
                    message.startTime = new $util.LongBits(object.startTime.low >>> 0, object.startTime.high >>> 0).toNumber();
            if (object.receiveTime != null)
                if ($util.Long)
                    (message.receiveTime = $util.Long.fromValue(object.receiveTime)).unsigned = false;
                else if (typeof object.receiveTime === "string")
                    message.receiveTime = parseInt(object.receiveTime, 10);
                else if (typeof object.receiveTime === "number")
                    message.receiveTime = object.receiveTime;
                else if (typeof object.receiveTime === "object")
                    message.receiveTime = new $util.LongBits(object.receiveTime.low >>> 0, object.receiveTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Mail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Mail
         * @static
         * @param {game.Mail} message Mail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Mail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.type = 0;
                object.title = "";
                object.content = "";
                object.rewards = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.startTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.receiveTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.receiveTime = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.rewards != null && message.hasOwnProperty("rewards"))
                object.rewards = message.rewards;
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (typeof message.startTime === "number")
                    object.startTime = options.longs === String ? String(message.startTime) : message.startTime;
                else
                    object.startTime = options.longs === String ? $util.Long.prototype.toString.call(message.startTime) : options.longs === Number ? new $util.LongBits(message.startTime.low >>> 0, message.startTime.high >>> 0).toNumber() : message.startTime;
            if (message.receiveTime != null && message.hasOwnProperty("receiveTime"))
                if (typeof message.receiveTime === "number")
                    object.receiveTime = options.longs === String ? String(message.receiveTime) : message.receiveTime;
                else
                    object.receiveTime = options.longs === String ? $util.Long.prototype.toString.call(message.receiveTime) : options.longs === Number ? new $util.LongBits(message.receiveTime.low >>> 0, message.receiveTime.high >>> 0).toNumber() : message.receiveTime;
            return object;
        };

        /**
         * Converts this Mail to JSON.
         * @function toJSON
         * @memberof game.Mail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Mail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Mail
         * @function getTypeUrl
         * @memberof game.Mail
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Mail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Mail";
        };

        return Mail;
    })();

    game.MailInfoReq = (function() {

        /**
         * Properties of a MailInfoReq.
         * @memberof game
         * @interface IMailInfoReq
         * @property {number} type MailInfoReq type
         */

        /**
         * Constructs a new MailInfoReq.
         * @memberof game
         * @classdesc Represents a MailInfoReq.
         * @implements IMailInfoReq
         * @constructor
         * @param {game.IMailInfoReq=} [properties] Properties to set
         */
        function MailInfoReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailInfoReq type.
         * @member {number} type
         * @memberof game.MailInfoReq
         * @instance
         */
        MailInfoReq.prototype.type = 0;

        /**
         * Creates a new MailInfoReq instance using the specified properties.
         * @function create
         * @memberof game.MailInfoReq
         * @static
         * @param {game.IMailInfoReq=} [properties] Properties to set
         * @returns {game.MailInfoReq} MailInfoReq instance
         */
        MailInfoReq.create = function create(properties) {
            return new MailInfoReq(properties);
        };

        /**
         * Encodes the specified MailInfoReq message. Does not implicitly {@link game.MailInfoReq.verify|verify} messages.
         * @function encode
         * @memberof game.MailInfoReq
         * @static
         * @param {game.IMailInfoReq} message MailInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified MailInfoReq message, length delimited. Does not implicitly {@link game.MailInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.MailInfoReq
         * @static
         * @param {game.IMailInfoReq} message MailInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.MailInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.MailInfoReq} MailInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.MailInfoReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.MailInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.MailInfoReq} MailInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailInfoReq message.
         * @function verify
         * @memberof game.MailInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            return null;
        };

        /**
         * Creates a MailInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.MailInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.MailInfoReq} MailInfoReq
         */
        MailInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.MailInfoReq)
                return object;
            let message = new $root.game.MailInfoReq();
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a MailInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.MailInfoReq
         * @static
         * @param {game.MailInfoReq} message MailInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.type = 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this MailInfoReq to JSON.
         * @function toJSON
         * @memberof game.MailInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MailInfoReq
         * @function getTypeUrl
         * @memberof game.MailInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MailInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.MailInfoReq";
        };

        return MailInfoReq;
    })();

    game.MailInfoRes = (function() {

        /**
         * Properties of a MailInfoRes.
         * @memberof game
         * @interface IMailInfoRes
         * @property {number} code MailInfoRes code
         * @property {string|null} [msg] MailInfoRes msg
         * @property {Array.<game.IMail>|null} [mailList] MailInfoRes mailList
         */

        /**
         * Constructs a new MailInfoRes.
         * @memberof game
         * @classdesc Represents a MailInfoRes.
         * @implements IMailInfoRes
         * @constructor
         * @param {game.IMailInfoRes=} [properties] Properties to set
         */
        function MailInfoRes(properties) {
            this.mailList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailInfoRes code.
         * @member {number} code
         * @memberof game.MailInfoRes
         * @instance
         */
        MailInfoRes.prototype.code = 0;

        /**
         * MailInfoRes msg.
         * @member {string} msg
         * @memberof game.MailInfoRes
         * @instance
         */
        MailInfoRes.prototype.msg = "";

        /**
         * MailInfoRes mailList.
         * @member {Array.<game.IMail>} mailList
         * @memberof game.MailInfoRes
         * @instance
         */
        MailInfoRes.prototype.mailList = $util.emptyArray;

        /**
         * Creates a new MailInfoRes instance using the specified properties.
         * @function create
         * @memberof game.MailInfoRes
         * @static
         * @param {game.IMailInfoRes=} [properties] Properties to set
         * @returns {game.MailInfoRes} MailInfoRes instance
         */
        MailInfoRes.create = function create(properties) {
            return new MailInfoRes(properties);
        };

        /**
         * Encodes the specified MailInfoRes message. Does not implicitly {@link game.MailInfoRes.verify|verify} messages.
         * @function encode
         * @memberof game.MailInfoRes
         * @static
         * @param {game.IMailInfoRes} message MailInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailInfoRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.mailList != null && message.mailList.length)
                for (let i = 0; i < message.mailList.length; ++i)
                    $root.game.Mail.encode(message.mailList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MailInfoRes message, length delimited. Does not implicitly {@link game.MailInfoRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.MailInfoRes
         * @static
         * @param {game.IMailInfoRes} message MailInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailInfoRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.MailInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.MailInfoRes} MailInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailInfoRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.MailInfoRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.mailList && message.mailList.length))
                            message.mailList = [];
                        message.mailList.push($root.game.Mail.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailInfoRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.MailInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.MailInfoRes} MailInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailInfoRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailInfoRes message.
         * @function verify
         * @memberof game.MailInfoRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailInfoRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.mailList != null && message.hasOwnProperty("mailList")) {
                if (!Array.isArray(message.mailList))
                    return "mailList: array expected";
                for (let i = 0; i < message.mailList.length; ++i) {
                    let error = $root.game.Mail.verify(message.mailList[i]);
                    if (error)
                        return "mailList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MailInfoRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.MailInfoRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.MailInfoRes} MailInfoRes
         */
        MailInfoRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.MailInfoRes)
                return object;
            let message = new $root.game.MailInfoRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.mailList) {
                if (!Array.isArray(object.mailList))
                    throw TypeError(".game.MailInfoRes.mailList: array expected");
                message.mailList = [];
                for (let i = 0; i < object.mailList.length; ++i) {
                    if (typeof object.mailList[i] !== "object")
                        throw TypeError(".game.MailInfoRes.mailList: object expected");
                    message.mailList[i] = $root.game.Mail.fromObject(object.mailList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MailInfoRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.MailInfoRes
         * @static
         * @param {game.MailInfoRes} message MailInfoRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailInfoRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.mailList = [];
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.mailList && message.mailList.length) {
                object.mailList = [];
                for (let j = 0; j < message.mailList.length; ++j)
                    object.mailList[j] = $root.game.Mail.toObject(message.mailList[j], options);
            }
            return object;
        };

        /**
         * Converts this MailInfoRes to JSON.
         * @function toJSON
         * @memberof game.MailInfoRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailInfoRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MailInfoRes
         * @function getTypeUrl
         * @memberof game.MailInfoRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MailInfoRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.MailInfoRes";
        };

        return MailInfoRes;
    })();

    game.MailReceiveReq = (function() {

        /**
         * Properties of a MailReceiveReq.
         * @memberof game
         * @interface IMailReceiveReq
         * @property {number} type MailReceiveReq type
         * @property {number} mailId MailReceiveReq mailId
         */

        /**
         * Constructs a new MailReceiveReq.
         * @memberof game
         * @classdesc Represents a MailReceiveReq.
         * @implements IMailReceiveReq
         * @constructor
         * @param {game.IMailReceiveReq=} [properties] Properties to set
         */
        function MailReceiveReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailReceiveReq type.
         * @member {number} type
         * @memberof game.MailReceiveReq
         * @instance
         */
        MailReceiveReq.prototype.type = 0;

        /**
         * MailReceiveReq mailId.
         * @member {number} mailId
         * @memberof game.MailReceiveReq
         * @instance
         */
        MailReceiveReq.prototype.mailId = 0;

        /**
         * Creates a new MailReceiveReq instance using the specified properties.
         * @function create
         * @memberof game.MailReceiveReq
         * @static
         * @param {game.IMailReceiveReq=} [properties] Properties to set
         * @returns {game.MailReceiveReq} MailReceiveReq instance
         */
        MailReceiveReq.create = function create(properties) {
            return new MailReceiveReq(properties);
        };

        /**
         * Encodes the specified MailReceiveReq message. Does not implicitly {@link game.MailReceiveReq.verify|verify} messages.
         * @function encode
         * @memberof game.MailReceiveReq
         * @static
         * @param {game.IMailReceiveReq} message MailReceiveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailReceiveReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mailId);
            return writer;
        };

        /**
         * Encodes the specified MailReceiveReq message, length delimited. Does not implicitly {@link game.MailReceiveReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.MailReceiveReq
         * @static
         * @param {game.IMailReceiveReq} message MailReceiveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailReceiveReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailReceiveReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.MailReceiveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.MailReceiveReq} MailReceiveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailReceiveReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.MailReceiveReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.mailId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailReceiveReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.MailReceiveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.MailReceiveReq} MailReceiveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailReceiveReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailReceiveReq message.
         * @function verify
         * @memberof game.MailReceiveReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailReceiveReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isInteger(message.mailId))
                return "mailId: integer expected";
            return null;
        };

        /**
         * Creates a MailReceiveReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.MailReceiveReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.MailReceiveReq} MailReceiveReq
         */
        MailReceiveReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.MailReceiveReq)
                return object;
            let message = new $root.game.MailReceiveReq();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.mailId != null)
                message.mailId = object.mailId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MailReceiveReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.MailReceiveReq
         * @static
         * @param {game.MailReceiveReq} message MailReceiveReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailReceiveReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = 0;
                object.mailId = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            return object;
        };

        /**
         * Converts this MailReceiveReq to JSON.
         * @function toJSON
         * @memberof game.MailReceiveReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailReceiveReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MailReceiveReq
         * @function getTypeUrl
         * @memberof game.MailReceiveReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MailReceiveReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.MailReceiveReq";
        };

        return MailReceiveReq;
    })();

    game.MailReceiveRes = (function() {

        /**
         * Properties of a MailReceiveRes.
         * @memberof game
         * @interface IMailReceiveRes
         * @property {number} code MailReceiveRes code
         * @property {string|null} [msg] MailReceiveRes msg
         * @property {game.IRewardCost|null} [reward] MailReceiveRes reward
         */

        /**
         * Constructs a new MailReceiveRes.
         * @memberof game
         * @classdesc Represents a MailReceiveRes.
         * @implements IMailReceiveRes
         * @constructor
         * @param {game.IMailReceiveRes=} [properties] Properties to set
         */
        function MailReceiveRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailReceiveRes code.
         * @member {number} code
         * @memberof game.MailReceiveRes
         * @instance
         */
        MailReceiveRes.prototype.code = 0;

        /**
         * MailReceiveRes msg.
         * @member {string} msg
         * @memberof game.MailReceiveRes
         * @instance
         */
        MailReceiveRes.prototype.msg = "";

        /**
         * MailReceiveRes reward.
         * @member {game.IRewardCost|null|undefined} reward
         * @memberof game.MailReceiveRes
         * @instance
         */
        MailReceiveRes.prototype.reward = null;

        /**
         * Creates a new MailReceiveRes instance using the specified properties.
         * @function create
         * @memberof game.MailReceiveRes
         * @static
         * @param {game.IMailReceiveRes=} [properties] Properties to set
         * @returns {game.MailReceiveRes} MailReceiveRes instance
         */
        MailReceiveRes.create = function create(properties) {
            return new MailReceiveRes(properties);
        };

        /**
         * Encodes the specified MailReceiveRes message. Does not implicitly {@link game.MailReceiveRes.verify|verify} messages.
         * @function encode
         * @memberof game.MailReceiveRes
         * @static
         * @param {game.IMailReceiveRes} message MailReceiveRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailReceiveRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                $root.game.RewardCost.encode(message.reward, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MailReceiveRes message, length delimited. Does not implicitly {@link game.MailReceiveRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.MailReceiveRes
         * @static
         * @param {game.IMailReceiveRes} message MailReceiveRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailReceiveRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailReceiveRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.MailReceiveRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.MailReceiveRes} MailReceiveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailReceiveRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.MailReceiveRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.reward = $root.game.RewardCost.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailReceiveRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.MailReceiveRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.MailReceiveRes} MailReceiveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailReceiveRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailReceiveRes message.
         * @function verify
         * @memberof game.MailReceiveRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailReceiveRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                let error = $root.game.RewardCost.verify(message.reward);
                if (error)
                    return "reward." + error;
            }
            return null;
        };

        /**
         * Creates a MailReceiveRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.MailReceiveRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.MailReceiveRes} MailReceiveRes
         */
        MailReceiveRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.MailReceiveRes)
                return object;
            let message = new $root.game.MailReceiveRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.reward != null) {
                if (typeof object.reward !== "object")
                    throw TypeError(".game.MailReceiveRes.reward: object expected");
                message.reward = $root.game.RewardCost.fromObject(object.reward);
            }
            return message;
        };

        /**
         * Creates a plain object from a MailReceiveRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.MailReceiveRes
         * @static
         * @param {game.MailReceiveRes} message MailReceiveRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailReceiveRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.reward = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.reward != null && message.hasOwnProperty("reward"))
                object.reward = $root.game.RewardCost.toObject(message.reward, options);
            return object;
        };

        /**
         * Converts this MailReceiveRes to JSON.
         * @function toJSON
         * @memberof game.MailReceiveRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailReceiveRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MailReceiveRes
         * @function getTypeUrl
         * @memberof game.MailReceiveRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MailReceiveRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.MailReceiveRes";
        };

        return MailReceiveRes;
    })();

    game.Item = (function() {

        /**
         * Properties of an Item.
         * @memberof game
         * @interface IItem
         * @property {number} id Item id
         * @property {number} playerId Item playerId
         * @property {number} cfgId Item cfgId
         * @property {number} quality Item quality
         * @property {number} count Item count
         * @property {boolean} lock Item lock
         * @property {string|null} [attr] Item attr
         */

        /**
         * Constructs a new Item.
         * @memberof game
         * @classdesc Represents an Item.
         * @implements IItem
         * @constructor
         * @param {game.IItem=} [properties] Properties to set
         */
        function Item(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Item id.
         * @member {number} id
         * @memberof game.Item
         * @instance
         */
        Item.prototype.id = 0;

        /**
         * Item playerId.
         * @member {number} playerId
         * @memberof game.Item
         * @instance
         */
        Item.prototype.playerId = 0;

        /**
         * Item cfgId.
         * @member {number} cfgId
         * @memberof game.Item
         * @instance
         */
        Item.prototype.cfgId = 0;

        /**
         * Item quality.
         * @member {number} quality
         * @memberof game.Item
         * @instance
         */
        Item.prototype.quality = 0;

        /**
         * Item count.
         * @member {number} count
         * @memberof game.Item
         * @instance
         */
        Item.prototype.count = 0;

        /**
         * Item lock.
         * @member {boolean} lock
         * @memberof game.Item
         * @instance
         */
        Item.prototype.lock = false;

        /**
         * Item attr.
         * @member {string} attr
         * @memberof game.Item
         * @instance
         */
        Item.prototype.attr = "";

        /**
         * Creates a new Item instance using the specified properties.
         * @function create
         * @memberof game.Item
         * @static
         * @param {game.IItem=} [properties] Properties to set
         * @returns {game.Item} Item instance
         */
        Item.create = function create(properties) {
            return new Item(properties);
        };

        /**
         * Encodes the specified Item message. Does not implicitly {@link game.Item.verify|verify} messages.
         * @function encode
         * @memberof game.Item
         * @static
         * @param {game.IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cfgId);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.quality);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.count);
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.lock);
            if (message.attr != null && Object.hasOwnProperty.call(message, "attr"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.attr);
            return writer;
        };

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link game.Item.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Item
         * @static
         * @param {game.IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @function decode
         * @memberof game.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Item();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.playerId = reader.int32();
                        break;
                    }
                case 3: {
                        message.cfgId = reader.int32();
                        break;
                    }
                case 4: {
                        message.quality = reader.int32();
                        break;
                    }
                case 5: {
                        message.count = reader.int32();
                        break;
                    }
                case 6: {
                        message.lock = reader.bool();
                        break;
                    }
                case 7: {
                        message.attr = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("cfgId"))
                throw $util.ProtocolError("missing required 'cfgId'", { instance: message });
            if (!message.hasOwnProperty("quality"))
                throw $util.ProtocolError("missing required 'quality'", { instance: message });
            if (!message.hasOwnProperty("count"))
                throw $util.ProtocolError("missing required 'count'", { instance: message });
            if (!message.hasOwnProperty("lock"))
                throw $util.ProtocolError("missing required 'lock'", { instance: message });
            return message;
        };

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Item message.
         * @function verify
         * @memberof game.Item
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Item.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
            if (!$util.isInteger(message.cfgId))
                return "cfgId: integer expected";
            if (!$util.isInteger(message.quality))
                return "quality: integer expected";
            if (!$util.isInteger(message.count))
                return "count: integer expected";
            if (typeof message.lock !== "boolean")
                return "lock: boolean expected";
            if (message.attr != null && message.hasOwnProperty("attr"))
                if (!$util.isString(message.attr))
                    return "attr: string expected";
            return null;
        };

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Item
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Item} Item
         */
        Item.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Item)
                return object;
            let message = new $root.game.Item();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.cfgId != null)
                message.cfgId = object.cfgId | 0;
            if (object.quality != null)
                message.quality = object.quality | 0;
            if (object.count != null)
                message.count = object.count | 0;
            if (object.lock != null)
                message.lock = Boolean(object.lock);
            if (object.attr != null)
                message.attr = String(object.attr);
            return message;
        };

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Item
         * @static
         * @param {game.Item} message Item
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Item.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.playerId = 0;
                object.cfgId = 0;
                object.quality = 0;
                object.count = 0;
                object.lock = false;
                object.attr = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.cfgId != null && message.hasOwnProperty("cfgId"))
                object.cfgId = message.cfgId;
            if (message.quality != null && message.hasOwnProperty("quality"))
                object.quality = message.quality;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.lock != null && message.hasOwnProperty("lock"))
                object.lock = message.lock;
            if (message.attr != null && message.hasOwnProperty("attr"))
                object.attr = message.attr;
            return object;
        };

        /**
         * Converts this Item to JSON.
         * @function toJSON
         * @memberof game.Item
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Item.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Item
         * @function getTypeUrl
         * @memberof game.Item
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Item.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Item";
        };

        return Item;
    })();

    game.RewardCostItem = (function() {

        /**
         * Properties of a RewardCostItem.
         * @memberof game
         * @interface IRewardCostItem
         * @property {number} cfgId RewardCostItem cfgId
         * @property {number} count RewardCostItem count
         */

        /**
         * Constructs a new RewardCostItem.
         * @memberof game
         * @classdesc Represents a RewardCostItem.
         * @implements IRewardCostItem
         * @constructor
         * @param {game.IRewardCostItem=} [properties] Properties to set
         */
        function RewardCostItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RewardCostItem cfgId.
         * @member {number} cfgId
         * @memberof game.RewardCostItem
         * @instance
         */
        RewardCostItem.prototype.cfgId = 0;

        /**
         * RewardCostItem count.
         * @member {number} count
         * @memberof game.RewardCostItem
         * @instance
         */
        RewardCostItem.prototype.count = 0;

        /**
         * Creates a new RewardCostItem instance using the specified properties.
         * @function create
         * @memberof game.RewardCostItem
         * @static
         * @param {game.IRewardCostItem=} [properties] Properties to set
         * @returns {game.RewardCostItem} RewardCostItem instance
         */
        RewardCostItem.create = function create(properties) {
            return new RewardCostItem(properties);
        };

        /**
         * Encodes the specified RewardCostItem message. Does not implicitly {@link game.RewardCostItem.verify|verify} messages.
         * @function encode
         * @memberof game.RewardCostItem
         * @static
         * @param {game.IRewardCostItem} message RewardCostItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RewardCostItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cfgId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.count);
            return writer;
        };

        /**
         * Encodes the specified RewardCostItem message, length delimited. Does not implicitly {@link game.RewardCostItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RewardCostItem
         * @static
         * @param {game.IRewardCostItem} message RewardCostItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RewardCostItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RewardCostItem message from the specified reader or buffer.
         * @function decode
         * @memberof game.RewardCostItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RewardCostItem} RewardCostItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RewardCostItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.RewardCostItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.cfgId = reader.int32();
                        break;
                    }
                case 3: {
                        message.count = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("cfgId"))
                throw $util.ProtocolError("missing required 'cfgId'", { instance: message });
            if (!message.hasOwnProperty("count"))
                throw $util.ProtocolError("missing required 'count'", { instance: message });
            return message;
        };

        /**
         * Decodes a RewardCostItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RewardCostItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RewardCostItem} RewardCostItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RewardCostItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RewardCostItem message.
         * @function verify
         * @memberof game.RewardCostItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RewardCostItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.cfgId))
                return "cfgId: integer expected";
            if (!$util.isInteger(message.count))
                return "count: integer expected";
            return null;
        };

        /**
         * Creates a RewardCostItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RewardCostItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RewardCostItem} RewardCostItem
         */
        RewardCostItem.fromObject = function fromObject(object) {
            if (object instanceof $root.game.RewardCostItem)
                return object;
            let message = new $root.game.RewardCostItem();
            if (object.cfgId != null)
                message.cfgId = object.cfgId | 0;
            if (object.count != null)
                message.count = object.count | 0;
            return message;
        };

        /**
         * Creates a plain object from a RewardCostItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RewardCostItem
         * @static
         * @param {game.RewardCostItem} message RewardCostItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RewardCostItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.cfgId = 0;
                object.count = 0;
            }
            if (message.cfgId != null && message.hasOwnProperty("cfgId"))
                object.cfgId = message.cfgId;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this RewardCostItem to JSON.
         * @function toJSON
         * @memberof game.RewardCostItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RewardCostItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RewardCostItem
         * @function getTypeUrl
         * @memberof game.RewardCostItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RewardCostItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.RewardCostItem";
        };

        return RewardCostItem;
    })();

    game.RewardCost = (function() {

        /**
         * Properties of a RewardCost.
         * @memberof game
         * @interface IRewardCost
         * @property {number} gold RewardCost gold
         * @property {number} yuanbao RewardCost yuanbao
         * @property {Array.<game.IItem>|null} [inserts] RewardCost inserts
         * @property {Array.<game.IRewardCostItem>|null} [changes] RewardCost changes
         */

        /**
         * Constructs a new RewardCost.
         * @memberof game
         * @classdesc Represents a RewardCost.
         * @implements IRewardCost
         * @constructor
         * @param {game.IRewardCost=} [properties] Properties to set
         */
        function RewardCost(properties) {
            this.inserts = [];
            this.changes = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RewardCost gold.
         * @member {number} gold
         * @memberof game.RewardCost
         * @instance
         */
        RewardCost.prototype.gold = 0;

        /**
         * RewardCost yuanbao.
         * @member {number} yuanbao
         * @memberof game.RewardCost
         * @instance
         */
        RewardCost.prototype.yuanbao = 0;

        /**
         * RewardCost inserts.
         * @member {Array.<game.IItem>} inserts
         * @memberof game.RewardCost
         * @instance
         */
        RewardCost.prototype.inserts = $util.emptyArray;

        /**
         * RewardCost changes.
         * @member {Array.<game.IRewardCostItem>} changes
         * @memberof game.RewardCost
         * @instance
         */
        RewardCost.prototype.changes = $util.emptyArray;

        /**
         * Creates a new RewardCost instance using the specified properties.
         * @function create
         * @memberof game.RewardCost
         * @static
         * @param {game.IRewardCost=} [properties] Properties to set
         * @returns {game.RewardCost} RewardCost instance
         */
        RewardCost.create = function create(properties) {
            return new RewardCost(properties);
        };

        /**
         * Encodes the specified RewardCost message. Does not implicitly {@link game.RewardCost.verify|verify} messages.
         * @function encode
         * @memberof game.RewardCost
         * @static
         * @param {game.IRewardCost} message RewardCost message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RewardCost.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gold);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.yuanbao);
            if (message.inserts != null && message.inserts.length)
                for (let i = 0; i < message.inserts.length; ++i)
                    $root.game.Item.encode(message.inserts[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.changes != null && message.changes.length)
                for (let i = 0; i < message.changes.length; ++i)
                    $root.game.RewardCostItem.encode(message.changes[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RewardCost message, length delimited. Does not implicitly {@link game.RewardCost.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RewardCost
         * @static
         * @param {game.IRewardCost} message RewardCost message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RewardCost.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RewardCost message from the specified reader or buffer.
         * @function decode
         * @memberof game.RewardCost
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RewardCost} RewardCost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RewardCost.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.RewardCost();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.gold = reader.int32();
                        break;
                    }
                case 2: {
                        message.yuanbao = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.inserts && message.inserts.length))
                            message.inserts = [];
                        message.inserts.push($root.game.Item.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.changes && message.changes.length))
                            message.changes = [];
                        message.changes.push($root.game.RewardCostItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("gold"))
                throw $util.ProtocolError("missing required 'gold'", { instance: message });
            if (!message.hasOwnProperty("yuanbao"))
                throw $util.ProtocolError("missing required 'yuanbao'", { instance: message });
            return message;
        };

        /**
         * Decodes a RewardCost message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RewardCost
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RewardCost} RewardCost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RewardCost.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RewardCost message.
         * @function verify
         * @memberof game.RewardCost
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RewardCost.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.gold))
                return "gold: integer expected";
            if (!$util.isInteger(message.yuanbao))
                return "yuanbao: integer expected";
            if (message.inserts != null && message.hasOwnProperty("inserts")) {
                if (!Array.isArray(message.inserts))
                    return "inserts: array expected";
                for (let i = 0; i < message.inserts.length; ++i) {
                    let error = $root.game.Item.verify(message.inserts[i]);
                    if (error)
                        return "inserts." + error;
                }
            }
            if (message.changes != null && message.hasOwnProperty("changes")) {
                if (!Array.isArray(message.changes))
                    return "changes: array expected";
                for (let i = 0; i < message.changes.length; ++i) {
                    let error = $root.game.RewardCostItem.verify(message.changes[i]);
                    if (error)
                        return "changes." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RewardCost message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RewardCost
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RewardCost} RewardCost
         */
        RewardCost.fromObject = function fromObject(object) {
            if (object instanceof $root.game.RewardCost)
                return object;
            let message = new $root.game.RewardCost();
            if (object.gold != null)
                message.gold = object.gold | 0;
            if (object.yuanbao != null)
                message.yuanbao = object.yuanbao | 0;
            if (object.inserts) {
                if (!Array.isArray(object.inserts))
                    throw TypeError(".game.RewardCost.inserts: array expected");
                message.inserts = [];
                for (let i = 0; i < object.inserts.length; ++i) {
                    if (typeof object.inserts[i] !== "object")
                        throw TypeError(".game.RewardCost.inserts: object expected");
                    message.inserts[i] = $root.game.Item.fromObject(object.inserts[i]);
                }
            }
            if (object.changes) {
                if (!Array.isArray(object.changes))
                    throw TypeError(".game.RewardCost.changes: array expected");
                message.changes = [];
                for (let i = 0; i < object.changes.length; ++i) {
                    if (typeof object.changes[i] !== "object")
                        throw TypeError(".game.RewardCost.changes: object expected");
                    message.changes[i] = $root.game.RewardCostItem.fromObject(object.changes[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RewardCost message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RewardCost
         * @static
         * @param {game.RewardCost} message RewardCost
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RewardCost.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.inserts = [];
                object.changes = [];
            }
            if (options.defaults) {
                object.gold = 0;
                object.yuanbao = 0;
            }
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.yuanbao != null && message.hasOwnProperty("yuanbao"))
                object.yuanbao = message.yuanbao;
            if (message.inserts && message.inserts.length) {
                object.inserts = [];
                for (let j = 0; j < message.inserts.length; ++j)
                    object.inserts[j] = $root.game.Item.toObject(message.inserts[j], options);
            }
            if (message.changes && message.changes.length) {
                object.changes = [];
                for (let j = 0; j < message.changes.length; ++j)
                    object.changes[j] = $root.game.RewardCostItem.toObject(message.changes[j], options);
            }
            return object;
        };

        /**
         * Converts this RewardCost to JSON.
         * @function toJSON
         * @memberof game.RewardCost
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RewardCost.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RewardCost
         * @function getTypeUrl
         * @memberof game.RewardCost
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RewardCost.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.RewardCost";
        };

        return RewardCost;
    })();

    game.Part = (function() {

        /**
         * Properties of a Part.
         * @memberof game
         * @interface IPart
         * @property {number} id Part id
         * @property {number} partIndex Part partIndex
         * @property {number} strength Part strength
         * @property {number|null} [itemId] Part itemId
         */

        /**
         * Constructs a new Part.
         * @memberof game
         * @classdesc Represents a Part.
         * @implements IPart
         * @constructor
         * @param {game.IPart=} [properties] Properties to set
         */
        function Part(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Part id.
         * @member {number} id
         * @memberof game.Part
         * @instance
         */
        Part.prototype.id = 0;

        /**
         * Part partIndex.
         * @member {number} partIndex
         * @memberof game.Part
         * @instance
         */
        Part.prototype.partIndex = 0;

        /**
         * Part strength.
         * @member {number} strength
         * @memberof game.Part
         * @instance
         */
        Part.prototype.strength = 0;

        /**
         * Part itemId.
         * @member {number} itemId
         * @memberof game.Part
         * @instance
         */
        Part.prototype.itemId = 0;

        /**
         * Creates a new Part instance using the specified properties.
         * @function create
         * @memberof game.Part
         * @static
         * @param {game.IPart=} [properties] Properties to set
         * @returns {game.Part} Part instance
         */
        Part.create = function create(properties) {
            return new Part(properties);
        };

        /**
         * Encodes the specified Part message. Does not implicitly {@link game.Part.verify|verify} messages.
         * @function encode
         * @memberof game.Part
         * @static
         * @param {game.IPart} message Part message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Part.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.partIndex);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.strength);
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.itemId);
            return writer;
        };

        /**
         * Encodes the specified Part message, length delimited. Does not implicitly {@link game.Part.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Part
         * @static
         * @param {game.IPart} message Part message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Part.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Part message from the specified reader or buffer.
         * @function decode
         * @memberof game.Part
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Part} Part
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Part.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Part();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.partIndex = reader.int32();
                        break;
                    }
                case 3: {
                        message.strength = reader.int32();
                        break;
                    }
                case 4: {
                        message.itemId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("partIndex"))
                throw $util.ProtocolError("missing required 'partIndex'", { instance: message });
            if (!message.hasOwnProperty("strength"))
                throw $util.ProtocolError("missing required 'strength'", { instance: message });
            return message;
        };

        /**
         * Decodes a Part message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Part
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Part} Part
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Part.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Part message.
         * @function verify
         * @memberof game.Part
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Part.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.partIndex))
                return "partIndex: integer expected";
            if (!$util.isInteger(message.strength))
                return "strength: integer expected";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isInteger(message.itemId))
                    return "itemId: integer expected";
            return null;
        };

        /**
         * Creates a Part message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Part
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Part} Part
         */
        Part.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Part)
                return object;
            let message = new $root.game.Part();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.partIndex != null)
                message.partIndex = object.partIndex | 0;
            if (object.strength != null)
                message.strength = object.strength | 0;
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            return message;
        };

        /**
         * Creates a plain object from a Part message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Part
         * @static
         * @param {game.Part} message Part
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Part.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.partIndex = 0;
                object.strength = 0;
                object.itemId = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.partIndex != null && message.hasOwnProperty("partIndex"))
                object.partIndex = message.partIndex;
            if (message.strength != null && message.hasOwnProperty("strength"))
                object.strength = message.strength;
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            return object;
        };

        /**
         * Converts this Part to JSON.
         * @function toJSON
         * @memberof game.Part
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Part.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Part
         * @function getTypeUrl
         * @memberof game.Part
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Part.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Part";
        };

        return Part;
    })();

    game.UseItemReq = (function() {

        /**
         * Properties of a UseItemReq.
         * @memberof game
         * @interface IUseItemReq
         * @property {number} itemId UseItemReq itemId
         * @property {number} count UseItemReq count
         */

        /**
         * Constructs a new UseItemReq.
         * @memberof game
         * @classdesc Represents a UseItemReq.
         * @implements IUseItemReq
         * @constructor
         * @param {game.IUseItemReq=} [properties] Properties to set
         */
        function UseItemReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UseItemReq itemId.
         * @member {number} itemId
         * @memberof game.UseItemReq
         * @instance
         */
        UseItemReq.prototype.itemId = 0;

        /**
         * UseItemReq count.
         * @member {number} count
         * @memberof game.UseItemReq
         * @instance
         */
        UseItemReq.prototype.count = 0;

        /**
         * Creates a new UseItemReq instance using the specified properties.
         * @function create
         * @memberof game.UseItemReq
         * @static
         * @param {game.IUseItemReq=} [properties] Properties to set
         * @returns {game.UseItemReq} UseItemReq instance
         */
        UseItemReq.create = function create(properties) {
            return new UseItemReq(properties);
        };

        /**
         * Encodes the specified UseItemReq message. Does not implicitly {@link game.UseItemReq.verify|verify} messages.
         * @function encode
         * @memberof game.UseItemReq
         * @static
         * @param {game.IUseItemReq} message UseItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseItemReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
            return writer;
        };

        /**
         * Encodes the specified UseItemReq message, length delimited. Does not implicitly {@link game.UseItemReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UseItemReq
         * @static
         * @param {game.IUseItemReq} message UseItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseItemReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UseItemReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.UseItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UseItemReq} UseItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseItemReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.UseItemReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.int32();
                        break;
                    }
                case 2: {
                        message.count = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            if (!message.hasOwnProperty("count"))
                throw $util.ProtocolError("missing required 'count'", { instance: message });
            return message;
        };

        /**
         * Decodes a UseItemReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UseItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UseItemReq} UseItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseItemReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UseItemReq message.
         * @function verify
         * @memberof game.UseItemReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UseItemReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (!$util.isInteger(message.count))
                return "count: integer expected";
            return null;
        };

        /**
         * Creates a UseItemReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UseItemReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UseItemReq} UseItemReq
         */
        UseItemReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.UseItemReq)
                return object;
            let message = new $root.game.UseItemReq();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.count != null)
                message.count = object.count | 0;
            return message;
        };

        /**
         * Creates a plain object from a UseItemReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UseItemReq
         * @static
         * @param {game.UseItemReq} message UseItemReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UseItemReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.count = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this UseItemReq to JSON.
         * @function toJSON
         * @memberof game.UseItemReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UseItemReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UseItemReq
         * @function getTypeUrl
         * @memberof game.UseItemReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UseItemReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.UseItemReq";
        };

        return UseItemReq;
    })();

    game.UseItemRes = (function() {

        /**
         * Properties of a UseItemRes.
         * @memberof game
         * @interface IUseItemRes
         * @property {number} code UseItemRes code
         * @property {string|null} [msg] UseItemRes msg
         * @property {Array.<game.IRewardCost>|null} [reward] UseItemRes reward
         * @property {Array.<game.IRewardCost>|null} [cost] UseItemRes cost
         */

        /**
         * Constructs a new UseItemRes.
         * @memberof game
         * @classdesc Represents a UseItemRes.
         * @implements IUseItemRes
         * @constructor
         * @param {game.IUseItemRes=} [properties] Properties to set
         */
        function UseItemRes(properties) {
            this.reward = [];
            this.cost = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UseItemRes code.
         * @member {number} code
         * @memberof game.UseItemRes
         * @instance
         */
        UseItemRes.prototype.code = 0;

        /**
         * UseItemRes msg.
         * @member {string} msg
         * @memberof game.UseItemRes
         * @instance
         */
        UseItemRes.prototype.msg = "";

        /**
         * UseItemRes reward.
         * @member {Array.<game.IRewardCost>} reward
         * @memberof game.UseItemRes
         * @instance
         */
        UseItemRes.prototype.reward = $util.emptyArray;

        /**
         * UseItemRes cost.
         * @member {Array.<game.IRewardCost>} cost
         * @memberof game.UseItemRes
         * @instance
         */
        UseItemRes.prototype.cost = $util.emptyArray;

        /**
         * Creates a new UseItemRes instance using the specified properties.
         * @function create
         * @memberof game.UseItemRes
         * @static
         * @param {game.IUseItemRes=} [properties] Properties to set
         * @returns {game.UseItemRes} UseItemRes instance
         */
        UseItemRes.create = function create(properties) {
            return new UseItemRes(properties);
        };

        /**
         * Encodes the specified UseItemRes message. Does not implicitly {@link game.UseItemRes.verify|verify} messages.
         * @function encode
         * @memberof game.UseItemRes
         * @static
         * @param {game.IUseItemRes} message UseItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseItemRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.reward != null && message.reward.length)
                for (let i = 0; i < message.reward.length; ++i)
                    $root.game.RewardCost.encode(message.reward[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.cost != null && message.cost.length)
                for (let i = 0; i < message.cost.length; ++i)
                    $root.game.RewardCost.encode(message.cost[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UseItemRes message, length delimited. Does not implicitly {@link game.UseItemRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UseItemRes
         * @static
         * @param {game.IUseItemRes} message UseItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseItemRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UseItemRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.UseItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UseItemRes} UseItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseItemRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.UseItemRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.reward && message.reward.length))
                            message.reward = [];
                        message.reward.push($root.game.RewardCost.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.cost && message.cost.length))
                            message.cost = [];
                        message.cost.push($root.game.RewardCost.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a UseItemRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UseItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UseItemRes} UseItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseItemRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UseItemRes message.
         * @function verify
         * @memberof game.UseItemRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UseItemRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                if (!Array.isArray(message.reward))
                    return "reward: array expected";
                for (let i = 0; i < message.reward.length; ++i) {
                    let error = $root.game.RewardCost.verify(message.reward[i]);
                    if (error)
                        return "reward." + error;
                }
            }
            if (message.cost != null && message.hasOwnProperty("cost")) {
                if (!Array.isArray(message.cost))
                    return "cost: array expected";
                for (let i = 0; i < message.cost.length; ++i) {
                    let error = $root.game.RewardCost.verify(message.cost[i]);
                    if (error)
                        return "cost." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UseItemRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UseItemRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UseItemRes} UseItemRes
         */
        UseItemRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.UseItemRes)
                return object;
            let message = new $root.game.UseItemRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.reward) {
                if (!Array.isArray(object.reward))
                    throw TypeError(".game.UseItemRes.reward: array expected");
                message.reward = [];
                for (let i = 0; i < object.reward.length; ++i) {
                    if (typeof object.reward[i] !== "object")
                        throw TypeError(".game.UseItemRes.reward: object expected");
                    message.reward[i] = $root.game.RewardCost.fromObject(object.reward[i]);
                }
            }
            if (object.cost) {
                if (!Array.isArray(object.cost))
                    throw TypeError(".game.UseItemRes.cost: array expected");
                message.cost = [];
                for (let i = 0; i < object.cost.length; ++i) {
                    if (typeof object.cost[i] !== "object")
                        throw TypeError(".game.UseItemRes.cost: object expected");
                    message.cost[i] = $root.game.RewardCost.fromObject(object.cost[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UseItemRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UseItemRes
         * @static
         * @param {game.UseItemRes} message UseItemRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UseItemRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.reward = [];
                object.cost = [];
            }
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.reward && message.reward.length) {
                object.reward = [];
                for (let j = 0; j < message.reward.length; ++j)
                    object.reward[j] = $root.game.RewardCost.toObject(message.reward[j], options);
            }
            if (message.cost && message.cost.length) {
                object.cost = [];
                for (let j = 0; j < message.cost.length; ++j)
                    object.cost[j] = $root.game.RewardCost.toObject(message.cost[j], options);
            }
            return object;
        };

        /**
         * Converts this UseItemRes to JSON.
         * @function toJSON
         * @memberof game.UseItemRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UseItemRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UseItemRes
         * @function getTypeUrl
         * @memberof game.UseItemRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UseItemRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.UseItemRes";
        };

        return UseItemRes;
    })();

    game.StrengthReq = (function() {

        /**
         * Properties of a StrengthReq.
         * @memberof game
         * @interface IStrengthReq
         * @property {number} partIndex StrengthReq partIndex
         */

        /**
         * Constructs a new StrengthReq.
         * @memberof game
         * @classdesc Represents a StrengthReq.
         * @implements IStrengthReq
         * @constructor
         * @param {game.IStrengthReq=} [properties] Properties to set
         */
        function StrengthReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StrengthReq partIndex.
         * @member {number} partIndex
         * @memberof game.StrengthReq
         * @instance
         */
        StrengthReq.prototype.partIndex = 0;

        /**
         * Creates a new StrengthReq instance using the specified properties.
         * @function create
         * @memberof game.StrengthReq
         * @static
         * @param {game.IStrengthReq=} [properties] Properties to set
         * @returns {game.StrengthReq} StrengthReq instance
         */
        StrengthReq.create = function create(properties) {
            return new StrengthReq(properties);
        };

        /**
         * Encodes the specified StrengthReq message. Does not implicitly {@link game.StrengthReq.verify|verify} messages.
         * @function encode
         * @memberof game.StrengthReq
         * @static
         * @param {game.IStrengthReq} message StrengthReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrengthReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.partIndex);
            return writer;
        };

        /**
         * Encodes the specified StrengthReq message, length delimited. Does not implicitly {@link game.StrengthReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.StrengthReq
         * @static
         * @param {game.IStrengthReq} message StrengthReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrengthReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StrengthReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.StrengthReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.StrengthReq} StrengthReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrengthReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.StrengthReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.partIndex = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("partIndex"))
                throw $util.ProtocolError("missing required 'partIndex'", { instance: message });
            return message;
        };

        /**
         * Decodes a StrengthReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.StrengthReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.StrengthReq} StrengthReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrengthReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StrengthReq message.
         * @function verify
         * @memberof game.StrengthReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StrengthReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.partIndex))
                return "partIndex: integer expected";
            return null;
        };

        /**
         * Creates a StrengthReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.StrengthReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.StrengthReq} StrengthReq
         */
        StrengthReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.StrengthReq)
                return object;
            let message = new $root.game.StrengthReq();
            if (object.partIndex != null)
                message.partIndex = object.partIndex | 0;
            return message;
        };

        /**
         * Creates a plain object from a StrengthReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.StrengthReq
         * @static
         * @param {game.StrengthReq} message StrengthReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StrengthReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.partIndex = 0;
            if (message.partIndex != null && message.hasOwnProperty("partIndex"))
                object.partIndex = message.partIndex;
            return object;
        };

        /**
         * Converts this StrengthReq to JSON.
         * @function toJSON
         * @memberof game.StrengthReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StrengthReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StrengthReq
         * @function getTypeUrl
         * @memberof game.StrengthReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StrengthReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.StrengthReq";
        };

        return StrengthReq;
    })();

    game.StrengthRes = (function() {

        /**
         * Properties of a StrengthRes.
         * @memberof game
         * @interface IStrengthRes
         * @property {number} code StrengthRes code
         * @property {string|null} [msg] StrengthRes msg
         */

        /**
         * Constructs a new StrengthRes.
         * @memberof game
         * @classdesc Represents a StrengthRes.
         * @implements IStrengthRes
         * @constructor
         * @param {game.IStrengthRes=} [properties] Properties to set
         */
        function StrengthRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StrengthRes code.
         * @member {number} code
         * @memberof game.StrengthRes
         * @instance
         */
        StrengthRes.prototype.code = 0;

        /**
         * StrengthRes msg.
         * @member {string} msg
         * @memberof game.StrengthRes
         * @instance
         */
        StrengthRes.prototype.msg = "";

        /**
         * Creates a new StrengthRes instance using the specified properties.
         * @function create
         * @memberof game.StrengthRes
         * @static
         * @param {game.IStrengthRes=} [properties] Properties to set
         * @returns {game.StrengthRes} StrengthRes instance
         */
        StrengthRes.create = function create(properties) {
            return new StrengthRes(properties);
        };

        /**
         * Encodes the specified StrengthRes message. Does not implicitly {@link game.StrengthRes.verify|verify} messages.
         * @function encode
         * @memberof game.StrengthRes
         * @static
         * @param {game.IStrengthRes} message StrengthRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrengthRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified StrengthRes message, length delimited. Does not implicitly {@link game.StrengthRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.StrengthRes
         * @static
         * @param {game.IStrengthRes} message StrengthRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrengthRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StrengthRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.StrengthRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.StrengthRes} StrengthRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrengthRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.StrengthRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a StrengthRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.StrengthRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.StrengthRes} StrengthRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrengthRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StrengthRes message.
         * @function verify
         * @memberof game.StrengthRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StrengthRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a StrengthRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.StrengthRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.StrengthRes} StrengthRes
         */
        StrengthRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.StrengthRes)
                return object;
            let message = new $root.game.StrengthRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a StrengthRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.StrengthRes
         * @static
         * @param {game.StrengthRes} message StrengthRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StrengthRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this StrengthRes to JSON.
         * @function toJSON
         * @memberof game.StrengthRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StrengthRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StrengthRes
         * @function getTypeUrl
         * @memberof game.StrengthRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StrengthRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.StrengthRes";
        };

        return StrengthRes;
    })();

    game.WearItemReq = (function() {

        /**
         * Properties of a WearItemReq.
         * @memberof game
         * @interface IWearItemReq
         * @property {number} itemId WearItemReq itemId
         * @property {number} partIndex WearItemReq partIndex
         */

        /**
         * Constructs a new WearItemReq.
         * @memberof game
         * @classdesc Represents a WearItemReq.
         * @implements IWearItemReq
         * @constructor
         * @param {game.IWearItemReq=} [properties] Properties to set
         */
        function WearItemReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WearItemReq itemId.
         * @member {number} itemId
         * @memberof game.WearItemReq
         * @instance
         */
        WearItemReq.prototype.itemId = 0;

        /**
         * WearItemReq partIndex.
         * @member {number} partIndex
         * @memberof game.WearItemReq
         * @instance
         */
        WearItemReq.prototype.partIndex = 0;

        /**
         * Creates a new WearItemReq instance using the specified properties.
         * @function create
         * @memberof game.WearItemReq
         * @static
         * @param {game.IWearItemReq=} [properties] Properties to set
         * @returns {game.WearItemReq} WearItemReq instance
         */
        WearItemReq.create = function create(properties) {
            return new WearItemReq(properties);
        };

        /**
         * Encodes the specified WearItemReq message. Does not implicitly {@link game.WearItemReq.verify|verify} messages.
         * @function encode
         * @memberof game.WearItemReq
         * @static
         * @param {game.IWearItemReq} message WearItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WearItemReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.partIndex);
            return writer;
        };

        /**
         * Encodes the specified WearItemReq message, length delimited. Does not implicitly {@link game.WearItemReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.WearItemReq
         * @static
         * @param {game.IWearItemReq} message WearItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WearItemReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WearItemReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.WearItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.WearItemReq} WearItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WearItemReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.WearItemReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.int32();
                        break;
                    }
                case 2: {
                        message.partIndex = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            if (!message.hasOwnProperty("partIndex"))
                throw $util.ProtocolError("missing required 'partIndex'", { instance: message });
            return message;
        };

        /**
         * Decodes a WearItemReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.WearItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.WearItemReq} WearItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WearItemReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WearItemReq message.
         * @function verify
         * @memberof game.WearItemReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WearItemReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (!$util.isInteger(message.partIndex))
                return "partIndex: integer expected";
            return null;
        };

        /**
         * Creates a WearItemReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.WearItemReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.WearItemReq} WearItemReq
         */
        WearItemReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.WearItemReq)
                return object;
            let message = new $root.game.WearItemReq();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.partIndex != null)
                message.partIndex = object.partIndex | 0;
            return message;
        };

        /**
         * Creates a plain object from a WearItemReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.WearItemReq
         * @static
         * @param {game.WearItemReq} message WearItemReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WearItemReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.partIndex = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.partIndex != null && message.hasOwnProperty("partIndex"))
                object.partIndex = message.partIndex;
            return object;
        };

        /**
         * Converts this WearItemReq to JSON.
         * @function toJSON
         * @memberof game.WearItemReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WearItemReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WearItemReq
         * @function getTypeUrl
         * @memberof game.WearItemReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WearItemReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.WearItemReq";
        };

        return WearItemReq;
    })();

    game.WearItemRes = (function() {

        /**
         * Properties of a WearItemRes.
         * @memberof game
         * @interface IWearItemRes
         * @property {number} code WearItemRes code
         * @property {string|null} [msg] WearItemRes msg
         */

        /**
         * Constructs a new WearItemRes.
         * @memberof game
         * @classdesc Represents a WearItemRes.
         * @implements IWearItemRes
         * @constructor
         * @param {game.IWearItemRes=} [properties] Properties to set
         */
        function WearItemRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WearItemRes code.
         * @member {number} code
         * @memberof game.WearItemRes
         * @instance
         */
        WearItemRes.prototype.code = 0;

        /**
         * WearItemRes msg.
         * @member {string} msg
         * @memberof game.WearItemRes
         * @instance
         */
        WearItemRes.prototype.msg = "";

        /**
         * Creates a new WearItemRes instance using the specified properties.
         * @function create
         * @memberof game.WearItemRes
         * @static
         * @param {game.IWearItemRes=} [properties] Properties to set
         * @returns {game.WearItemRes} WearItemRes instance
         */
        WearItemRes.create = function create(properties) {
            return new WearItemRes(properties);
        };

        /**
         * Encodes the specified WearItemRes message. Does not implicitly {@link game.WearItemRes.verify|verify} messages.
         * @function encode
         * @memberof game.WearItemRes
         * @static
         * @param {game.IWearItemRes} message WearItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WearItemRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified WearItemRes message, length delimited. Does not implicitly {@link game.WearItemRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.WearItemRes
         * @static
         * @param {game.IWearItemRes} message WearItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WearItemRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WearItemRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.WearItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.WearItemRes} WearItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WearItemRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.WearItemRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a WearItemRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.WearItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.WearItemRes} WearItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WearItemRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WearItemRes message.
         * @function verify
         * @memberof game.WearItemRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WearItemRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a WearItemRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.WearItemRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.WearItemRes} WearItemRes
         */
        WearItemRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.WearItemRes)
                return object;
            let message = new $root.game.WearItemRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a WearItemRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.WearItemRes
         * @static
         * @param {game.WearItemRes} message WearItemRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WearItemRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this WearItemRes to JSON.
         * @function toJSON
         * @memberof game.WearItemRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WearItemRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WearItemRes
         * @function getTypeUrl
         * @memberof game.WearItemRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WearItemRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.WearItemRes";
        };

        return WearItemRes;
    })();

    game.TakeOffItemReq = (function() {

        /**
         * Properties of a TakeOffItemReq.
         * @memberof game
         * @interface ITakeOffItemReq
         * @property {number} itemId TakeOffItemReq itemId
         * @property {number} partIndex TakeOffItemReq partIndex
         */

        /**
         * Constructs a new TakeOffItemReq.
         * @memberof game
         * @classdesc Represents a TakeOffItemReq.
         * @implements ITakeOffItemReq
         * @constructor
         * @param {game.ITakeOffItemReq=} [properties] Properties to set
         */
        function TakeOffItemReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TakeOffItemReq itemId.
         * @member {number} itemId
         * @memberof game.TakeOffItemReq
         * @instance
         */
        TakeOffItemReq.prototype.itemId = 0;

        /**
         * TakeOffItemReq partIndex.
         * @member {number} partIndex
         * @memberof game.TakeOffItemReq
         * @instance
         */
        TakeOffItemReq.prototype.partIndex = 0;

        /**
         * Creates a new TakeOffItemReq instance using the specified properties.
         * @function create
         * @memberof game.TakeOffItemReq
         * @static
         * @param {game.ITakeOffItemReq=} [properties] Properties to set
         * @returns {game.TakeOffItemReq} TakeOffItemReq instance
         */
        TakeOffItemReq.create = function create(properties) {
            return new TakeOffItemReq(properties);
        };

        /**
         * Encodes the specified TakeOffItemReq message. Does not implicitly {@link game.TakeOffItemReq.verify|verify} messages.
         * @function encode
         * @memberof game.TakeOffItemReq
         * @static
         * @param {game.ITakeOffItemReq} message TakeOffItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TakeOffItemReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.partIndex);
            return writer;
        };

        /**
         * Encodes the specified TakeOffItemReq message, length delimited. Does not implicitly {@link game.TakeOffItemReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.TakeOffItemReq
         * @static
         * @param {game.ITakeOffItemReq} message TakeOffItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TakeOffItemReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TakeOffItemReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.TakeOffItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.TakeOffItemReq} TakeOffItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TakeOffItemReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.TakeOffItemReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.int32();
                        break;
                    }
                case 2: {
                        message.partIndex = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            if (!message.hasOwnProperty("partIndex"))
                throw $util.ProtocolError("missing required 'partIndex'", { instance: message });
            return message;
        };

        /**
         * Decodes a TakeOffItemReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.TakeOffItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.TakeOffItemReq} TakeOffItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TakeOffItemReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TakeOffItemReq message.
         * @function verify
         * @memberof game.TakeOffItemReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TakeOffItemReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (!$util.isInteger(message.partIndex))
                return "partIndex: integer expected";
            return null;
        };

        /**
         * Creates a TakeOffItemReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.TakeOffItemReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.TakeOffItemReq} TakeOffItemReq
         */
        TakeOffItemReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.TakeOffItemReq)
                return object;
            let message = new $root.game.TakeOffItemReq();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.partIndex != null)
                message.partIndex = object.partIndex | 0;
            return message;
        };

        /**
         * Creates a plain object from a TakeOffItemReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.TakeOffItemReq
         * @static
         * @param {game.TakeOffItemReq} message TakeOffItemReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TakeOffItemReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.partIndex = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.partIndex != null && message.hasOwnProperty("partIndex"))
                object.partIndex = message.partIndex;
            return object;
        };

        /**
         * Converts this TakeOffItemReq to JSON.
         * @function toJSON
         * @memberof game.TakeOffItemReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TakeOffItemReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TakeOffItemReq
         * @function getTypeUrl
         * @memberof game.TakeOffItemReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TakeOffItemReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.TakeOffItemReq";
        };

        return TakeOffItemReq;
    })();

    game.TakeOffItemRes = (function() {

        /**
         * Properties of a TakeOffItemRes.
         * @memberof game
         * @interface ITakeOffItemRes
         * @property {number} code TakeOffItemRes code
         * @property {string|null} [msg] TakeOffItemRes msg
         */

        /**
         * Constructs a new TakeOffItemRes.
         * @memberof game
         * @classdesc Represents a TakeOffItemRes.
         * @implements ITakeOffItemRes
         * @constructor
         * @param {game.ITakeOffItemRes=} [properties] Properties to set
         */
        function TakeOffItemRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TakeOffItemRes code.
         * @member {number} code
         * @memberof game.TakeOffItemRes
         * @instance
         */
        TakeOffItemRes.prototype.code = 0;

        /**
         * TakeOffItemRes msg.
         * @member {string} msg
         * @memberof game.TakeOffItemRes
         * @instance
         */
        TakeOffItemRes.prototype.msg = "";

        /**
         * Creates a new TakeOffItemRes instance using the specified properties.
         * @function create
         * @memberof game.TakeOffItemRes
         * @static
         * @param {game.ITakeOffItemRes=} [properties] Properties to set
         * @returns {game.TakeOffItemRes} TakeOffItemRes instance
         */
        TakeOffItemRes.create = function create(properties) {
            return new TakeOffItemRes(properties);
        };

        /**
         * Encodes the specified TakeOffItemRes message. Does not implicitly {@link game.TakeOffItemRes.verify|verify} messages.
         * @function encode
         * @memberof game.TakeOffItemRes
         * @static
         * @param {game.ITakeOffItemRes} message TakeOffItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TakeOffItemRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified TakeOffItemRes message, length delimited. Does not implicitly {@link game.TakeOffItemRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.TakeOffItemRes
         * @static
         * @param {game.ITakeOffItemRes} message TakeOffItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TakeOffItemRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TakeOffItemRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.TakeOffItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.TakeOffItemRes} TakeOffItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TakeOffItemRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.TakeOffItemRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a TakeOffItemRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.TakeOffItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.TakeOffItemRes} TakeOffItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TakeOffItemRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TakeOffItemRes message.
         * @function verify
         * @memberof game.TakeOffItemRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TakeOffItemRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a TakeOffItemRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.TakeOffItemRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.TakeOffItemRes} TakeOffItemRes
         */
        TakeOffItemRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.TakeOffItemRes)
                return object;
            let message = new $root.game.TakeOffItemRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a TakeOffItemRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.TakeOffItemRes
         * @static
         * @param {game.TakeOffItemRes} message TakeOffItemRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TakeOffItemRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this TakeOffItemRes to JSON.
         * @function toJSON
         * @memberof game.TakeOffItemRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TakeOffItemRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TakeOffItemRes
         * @function getTypeUrl
         * @memberof game.TakeOffItemRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TakeOffItemRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.TakeOffItemRes";
        };

        return TakeOffItemRes;
    })();

    game.RecycleItemReq = (function() {

        /**
         * Properties of a RecycleItemReq.
         * @memberof game
         * @interface IRecycleItemReq
         * @property {Array.<number>|null} [itemIds] RecycleItemReq itemIds
         */

        /**
         * Constructs a new RecycleItemReq.
         * @memberof game
         * @classdesc Represents a RecycleItemReq.
         * @implements IRecycleItemReq
         * @constructor
         * @param {game.IRecycleItemReq=} [properties] Properties to set
         */
        function RecycleItemReq(properties) {
            this.itemIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecycleItemReq itemIds.
         * @member {Array.<number>} itemIds
         * @memberof game.RecycleItemReq
         * @instance
         */
        RecycleItemReq.prototype.itemIds = $util.emptyArray;

        /**
         * Creates a new RecycleItemReq instance using the specified properties.
         * @function create
         * @memberof game.RecycleItemReq
         * @static
         * @param {game.IRecycleItemReq=} [properties] Properties to set
         * @returns {game.RecycleItemReq} RecycleItemReq instance
         */
        RecycleItemReq.create = function create(properties) {
            return new RecycleItemReq(properties);
        };

        /**
         * Encodes the specified RecycleItemReq message. Does not implicitly {@link game.RecycleItemReq.verify|verify} messages.
         * @function encode
         * @memberof game.RecycleItemReq
         * @static
         * @param {game.IRecycleItemReq} message RecycleItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecycleItemReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemIds != null && message.itemIds.length)
                for (let i = 0; i < message.itemIds.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemIds[i]);
            return writer;
        };

        /**
         * Encodes the specified RecycleItemReq message, length delimited. Does not implicitly {@link game.RecycleItemReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RecycleItemReq
         * @static
         * @param {game.IRecycleItemReq} message RecycleItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecycleItemReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RecycleItemReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.RecycleItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RecycleItemReq} RecycleItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecycleItemReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.RecycleItemReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.itemIds && message.itemIds.length))
                            message.itemIds = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.itemIds.push(reader.int32());
                        } else
                            message.itemIds.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RecycleItemReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RecycleItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RecycleItemReq} RecycleItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecycleItemReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RecycleItemReq message.
         * @function verify
         * @memberof game.RecycleItemReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RecycleItemReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemIds != null && message.hasOwnProperty("itemIds")) {
                if (!Array.isArray(message.itemIds))
                    return "itemIds: array expected";
                for (let i = 0; i < message.itemIds.length; ++i)
                    if (!$util.isInteger(message.itemIds[i]))
                        return "itemIds: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a RecycleItemReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RecycleItemReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RecycleItemReq} RecycleItemReq
         */
        RecycleItemReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.RecycleItemReq)
                return object;
            let message = new $root.game.RecycleItemReq();
            if (object.itemIds) {
                if (!Array.isArray(object.itemIds))
                    throw TypeError(".game.RecycleItemReq.itemIds: array expected");
                message.itemIds = [];
                for (let i = 0; i < object.itemIds.length; ++i)
                    message.itemIds[i] = object.itemIds[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a RecycleItemReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RecycleItemReq
         * @static
         * @param {game.RecycleItemReq} message RecycleItemReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RecycleItemReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.itemIds = [];
            if (message.itemIds && message.itemIds.length) {
                object.itemIds = [];
                for (let j = 0; j < message.itemIds.length; ++j)
                    object.itemIds[j] = message.itemIds[j];
            }
            return object;
        };

        /**
         * Converts this RecycleItemReq to JSON.
         * @function toJSON
         * @memberof game.RecycleItemReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RecycleItemReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RecycleItemReq
         * @function getTypeUrl
         * @memberof game.RecycleItemReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RecycleItemReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.RecycleItemReq";
        };

        return RecycleItemReq;
    })();

    game.RecycleItemRes = (function() {

        /**
         * Properties of a RecycleItemRes.
         * @memberof game
         * @interface IRecycleItemRes
         * @property {number} code RecycleItemRes code
         * @property {string|null} [msg] RecycleItemRes msg
         * @property {number|null} [gold] RecycleItemRes gold
         */

        /**
         * Constructs a new RecycleItemRes.
         * @memberof game
         * @classdesc Represents a RecycleItemRes.
         * @implements IRecycleItemRes
         * @constructor
         * @param {game.IRecycleItemRes=} [properties] Properties to set
         */
        function RecycleItemRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecycleItemRes code.
         * @member {number} code
         * @memberof game.RecycleItemRes
         * @instance
         */
        RecycleItemRes.prototype.code = 0;

        /**
         * RecycleItemRes msg.
         * @member {string} msg
         * @memberof game.RecycleItemRes
         * @instance
         */
        RecycleItemRes.prototype.msg = "";

        /**
         * RecycleItemRes gold.
         * @member {number} gold
         * @memberof game.RecycleItemRes
         * @instance
         */
        RecycleItemRes.prototype.gold = 0;

        /**
         * Creates a new RecycleItemRes instance using the specified properties.
         * @function create
         * @memberof game.RecycleItemRes
         * @static
         * @param {game.IRecycleItemRes=} [properties] Properties to set
         * @returns {game.RecycleItemRes} RecycleItemRes instance
         */
        RecycleItemRes.create = function create(properties) {
            return new RecycleItemRes(properties);
        };

        /**
         * Encodes the specified RecycleItemRes message. Does not implicitly {@link game.RecycleItemRes.verify|verify} messages.
         * @function encode
         * @memberof game.RecycleItemRes
         * @static
         * @param {game.IRecycleItemRes} message RecycleItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecycleItemRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gold);
            return writer;
        };

        /**
         * Encodes the specified RecycleItemRes message, length delimited. Does not implicitly {@link game.RecycleItemRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RecycleItemRes
         * @static
         * @param {game.IRecycleItemRes} message RecycleItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecycleItemRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RecycleItemRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.RecycleItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RecycleItemRes} RecycleItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecycleItemRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.RecycleItemRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.gold = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a RecycleItemRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RecycleItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RecycleItemRes} RecycleItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecycleItemRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RecycleItemRes message.
         * @function verify
         * @memberof game.RecycleItemRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RecycleItemRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold))
                    return "gold: integer expected";
            return null;
        };

        /**
         * Creates a RecycleItemRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RecycleItemRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RecycleItemRes} RecycleItemRes
         */
        RecycleItemRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.RecycleItemRes)
                return object;
            let message = new $root.game.RecycleItemRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.gold != null)
                message.gold = object.gold | 0;
            return message;
        };

        /**
         * Creates a plain object from a RecycleItemRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RecycleItemRes
         * @static
         * @param {game.RecycleItemRes} message RecycleItemRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RecycleItemRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.gold = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            return object;
        };

        /**
         * Converts this RecycleItemRes to JSON.
         * @function toJSON
         * @memberof game.RecycleItemRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RecycleItemRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RecycleItemRes
         * @function getTypeUrl
         * @memberof game.RecycleItemRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RecycleItemRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.RecycleItemRes";
        };

        return RecycleItemRes;
    })();

    game.LockItemReq = (function() {

        /**
         * Properties of a LockItemReq.
         * @memberof game
         * @interface ILockItemReq
         * @property {number} itemId LockItemReq itemId
         * @property {boolean} lock LockItemReq lock
         */

        /**
         * Constructs a new LockItemReq.
         * @memberof game
         * @classdesc Represents a LockItemReq.
         * @implements ILockItemReq
         * @constructor
         * @param {game.ILockItemReq=} [properties] Properties to set
         */
        function LockItemReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LockItemReq itemId.
         * @member {number} itemId
         * @memberof game.LockItemReq
         * @instance
         */
        LockItemReq.prototype.itemId = 0;

        /**
         * LockItemReq lock.
         * @member {boolean} lock
         * @memberof game.LockItemReq
         * @instance
         */
        LockItemReq.prototype.lock = false;

        /**
         * Creates a new LockItemReq instance using the specified properties.
         * @function create
         * @memberof game.LockItemReq
         * @static
         * @param {game.ILockItemReq=} [properties] Properties to set
         * @returns {game.LockItemReq} LockItemReq instance
         */
        LockItemReq.create = function create(properties) {
            return new LockItemReq(properties);
        };

        /**
         * Encodes the specified LockItemReq message. Does not implicitly {@link game.LockItemReq.verify|verify} messages.
         * @function encode
         * @memberof game.LockItemReq
         * @static
         * @param {game.ILockItemReq} message LockItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LockItemReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.lock);
            return writer;
        };

        /**
         * Encodes the specified LockItemReq message, length delimited. Does not implicitly {@link game.LockItemReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.LockItemReq
         * @static
         * @param {game.ILockItemReq} message LockItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LockItemReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LockItemReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.LockItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.LockItemReq} LockItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LockItemReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.LockItemReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.int32();
                        break;
                    }
                case 2: {
                        message.lock = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            if (!message.hasOwnProperty("lock"))
                throw $util.ProtocolError("missing required 'lock'", { instance: message });
            return message;
        };

        /**
         * Decodes a LockItemReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.LockItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.LockItemReq} LockItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LockItemReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LockItemReq message.
         * @function verify
         * @memberof game.LockItemReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LockItemReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (typeof message.lock !== "boolean")
                return "lock: boolean expected";
            return null;
        };

        /**
         * Creates a LockItemReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.LockItemReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.LockItemReq} LockItemReq
         */
        LockItemReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.LockItemReq)
                return object;
            let message = new $root.game.LockItemReq();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.lock != null)
                message.lock = Boolean(object.lock);
            return message;
        };

        /**
         * Creates a plain object from a LockItemReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.LockItemReq
         * @static
         * @param {game.LockItemReq} message LockItemReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LockItemReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.lock = false;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.lock != null && message.hasOwnProperty("lock"))
                object.lock = message.lock;
            return object;
        };

        /**
         * Converts this LockItemReq to JSON.
         * @function toJSON
         * @memberof game.LockItemReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LockItemReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LockItemReq
         * @function getTypeUrl
         * @memberof game.LockItemReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LockItemReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.LockItemReq";
        };

        return LockItemReq;
    })();

    game.LockItemRes = (function() {

        /**
         * Properties of a LockItemRes.
         * @memberof game
         * @interface ILockItemRes
         * @property {number} code LockItemRes code
         * @property {string|null} [msg] LockItemRes msg
         */

        /**
         * Constructs a new LockItemRes.
         * @memberof game
         * @classdesc Represents a LockItemRes.
         * @implements ILockItemRes
         * @constructor
         * @param {game.ILockItemRes=} [properties] Properties to set
         */
        function LockItemRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LockItemRes code.
         * @member {number} code
         * @memberof game.LockItemRes
         * @instance
         */
        LockItemRes.prototype.code = 0;

        /**
         * LockItemRes msg.
         * @member {string} msg
         * @memberof game.LockItemRes
         * @instance
         */
        LockItemRes.prototype.msg = "";

        /**
         * Creates a new LockItemRes instance using the specified properties.
         * @function create
         * @memberof game.LockItemRes
         * @static
         * @param {game.ILockItemRes=} [properties] Properties to set
         * @returns {game.LockItemRes} LockItemRes instance
         */
        LockItemRes.create = function create(properties) {
            return new LockItemRes(properties);
        };

        /**
         * Encodes the specified LockItemRes message. Does not implicitly {@link game.LockItemRes.verify|verify} messages.
         * @function encode
         * @memberof game.LockItemRes
         * @static
         * @param {game.ILockItemRes} message LockItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LockItemRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified LockItemRes message, length delimited. Does not implicitly {@link game.LockItemRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.LockItemRes
         * @static
         * @param {game.ILockItemRes} message LockItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LockItemRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LockItemRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.LockItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.LockItemRes} LockItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LockItemRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.LockItemRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a LockItemRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.LockItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.LockItemRes} LockItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LockItemRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LockItemRes message.
         * @function verify
         * @memberof game.LockItemRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LockItemRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a LockItemRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.LockItemRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.LockItemRes} LockItemRes
         */
        LockItemRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.LockItemRes)
                return object;
            let message = new $root.game.LockItemRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a LockItemRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.LockItemRes
         * @static
         * @param {game.LockItemRes} message LockItemRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LockItemRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this LockItemRes to JSON.
         * @function toJSON
         * @memberof game.LockItemRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LockItemRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LockItemRes
         * @function getTypeUrl
         * @memberof game.LockItemRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LockItemRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.LockItemRes";
        };

        return LockItemRes;
    })();

    game.WashItemReq = (function() {

        /**
         * Properties of a WashItemReq.
         * @memberof game
         * @interface IWashItemReq
         * @property {number} itemId WashItemReq itemId
         * @property {boolean} save WashItemReq save
         */

        /**
         * Constructs a new WashItemReq.
         * @memberof game
         * @classdesc Represents a WashItemReq.
         * @implements IWashItemReq
         * @constructor
         * @param {game.IWashItemReq=} [properties] Properties to set
         */
        function WashItemReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WashItemReq itemId.
         * @member {number} itemId
         * @memberof game.WashItemReq
         * @instance
         */
        WashItemReq.prototype.itemId = 0;

        /**
         * WashItemReq save.
         * @member {boolean} save
         * @memberof game.WashItemReq
         * @instance
         */
        WashItemReq.prototype.save = false;

        /**
         * Creates a new WashItemReq instance using the specified properties.
         * @function create
         * @memberof game.WashItemReq
         * @static
         * @param {game.IWashItemReq=} [properties] Properties to set
         * @returns {game.WashItemReq} WashItemReq instance
         */
        WashItemReq.create = function create(properties) {
            return new WashItemReq(properties);
        };

        /**
         * Encodes the specified WashItemReq message. Does not implicitly {@link game.WashItemReq.verify|verify} messages.
         * @function encode
         * @memberof game.WashItemReq
         * @static
         * @param {game.IWashItemReq} message WashItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WashItemReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.save);
            return writer;
        };

        /**
         * Encodes the specified WashItemReq message, length delimited. Does not implicitly {@link game.WashItemReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.WashItemReq
         * @static
         * @param {game.IWashItemReq} message WashItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WashItemReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WashItemReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.WashItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.WashItemReq} WashItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WashItemReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.WashItemReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.int32();
                        break;
                    }
                case 2: {
                        message.save = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            if (!message.hasOwnProperty("save"))
                throw $util.ProtocolError("missing required 'save'", { instance: message });
            return message;
        };

        /**
         * Decodes a WashItemReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.WashItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.WashItemReq} WashItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WashItemReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WashItemReq message.
         * @function verify
         * @memberof game.WashItemReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WashItemReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (typeof message.save !== "boolean")
                return "save: boolean expected";
            return null;
        };

        /**
         * Creates a WashItemReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.WashItemReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.WashItemReq} WashItemReq
         */
        WashItemReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.WashItemReq)
                return object;
            let message = new $root.game.WashItemReq();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.save != null)
                message.save = Boolean(object.save);
            return message;
        };

        /**
         * Creates a plain object from a WashItemReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.WashItemReq
         * @static
         * @param {game.WashItemReq} message WashItemReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WashItemReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.save = false;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.save != null && message.hasOwnProperty("save"))
                object.save = message.save;
            return object;
        };

        /**
         * Converts this WashItemReq to JSON.
         * @function toJSON
         * @memberof game.WashItemReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WashItemReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WashItemReq
         * @function getTypeUrl
         * @memberof game.WashItemReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WashItemReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.WashItemReq";
        };

        return WashItemReq;
    })();

    game.WashItemRes = (function() {

        /**
         * Properties of a WashItemRes.
         * @memberof game
         * @interface IWashItemRes
         * @property {number} code WashItemRes code
         * @property {string|null} [msg] WashItemRes msg
         * @property {string|null} [attr] WashItemRes attr
         * @property {number|null} [quality] WashItemRes quality
         * @property {boolean|null} [save] WashItemRes save
         */

        /**
         * Constructs a new WashItemRes.
         * @memberof game
         * @classdesc Represents a WashItemRes.
         * @implements IWashItemRes
         * @constructor
         * @param {game.IWashItemRes=} [properties] Properties to set
         */
        function WashItemRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WashItemRes code.
         * @member {number} code
         * @memberof game.WashItemRes
         * @instance
         */
        WashItemRes.prototype.code = 0;

        /**
         * WashItemRes msg.
         * @member {string} msg
         * @memberof game.WashItemRes
         * @instance
         */
        WashItemRes.prototype.msg = "";

        /**
         * WashItemRes attr.
         * @member {string} attr
         * @memberof game.WashItemRes
         * @instance
         */
        WashItemRes.prototype.attr = "";

        /**
         * WashItemRes quality.
         * @member {number} quality
         * @memberof game.WashItemRes
         * @instance
         */
        WashItemRes.prototype.quality = 0;

        /**
         * WashItemRes save.
         * @member {boolean} save
         * @memberof game.WashItemRes
         * @instance
         */
        WashItemRes.prototype.save = false;

        /**
         * Creates a new WashItemRes instance using the specified properties.
         * @function create
         * @memberof game.WashItemRes
         * @static
         * @param {game.IWashItemRes=} [properties] Properties to set
         * @returns {game.WashItemRes} WashItemRes instance
         */
        WashItemRes.create = function create(properties) {
            return new WashItemRes(properties);
        };

        /**
         * Encodes the specified WashItemRes message. Does not implicitly {@link game.WashItemRes.verify|verify} messages.
         * @function encode
         * @memberof game.WashItemRes
         * @static
         * @param {game.IWashItemRes} message WashItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WashItemRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.attr != null && Object.hasOwnProperty.call(message, "attr"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.attr);
            if (message.quality != null && Object.hasOwnProperty.call(message, "quality"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.quality);
            if (message.save != null && Object.hasOwnProperty.call(message, "save"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.save);
            return writer;
        };

        /**
         * Encodes the specified WashItemRes message, length delimited. Does not implicitly {@link game.WashItemRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.WashItemRes
         * @static
         * @param {game.IWashItemRes} message WashItemRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WashItemRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WashItemRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.WashItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.WashItemRes} WashItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WashItemRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.WashItemRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.attr = reader.string();
                        break;
                    }
                case 4: {
                        message.quality = reader.int32();
                        break;
                    }
                case 5: {
                        message.save = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a WashItemRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.WashItemRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.WashItemRes} WashItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WashItemRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WashItemRes message.
         * @function verify
         * @memberof game.WashItemRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WashItemRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.attr != null && message.hasOwnProperty("attr"))
                if (!$util.isString(message.attr))
                    return "attr: string expected";
            if (message.quality != null && message.hasOwnProperty("quality"))
                if (!$util.isInteger(message.quality))
                    return "quality: integer expected";
            if (message.save != null && message.hasOwnProperty("save"))
                if (typeof message.save !== "boolean")
                    return "save: boolean expected";
            return null;
        };

        /**
         * Creates a WashItemRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.WashItemRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.WashItemRes} WashItemRes
         */
        WashItemRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.WashItemRes)
                return object;
            let message = new $root.game.WashItemRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.attr != null)
                message.attr = String(object.attr);
            if (object.quality != null)
                message.quality = object.quality | 0;
            if (object.save != null)
                message.save = Boolean(object.save);
            return message;
        };

        /**
         * Creates a plain object from a WashItemRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.WashItemRes
         * @static
         * @param {game.WashItemRes} message WashItemRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WashItemRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.attr = "";
                object.quality = 0;
                object.save = false;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.attr != null && message.hasOwnProperty("attr"))
                object.attr = message.attr;
            if (message.quality != null && message.hasOwnProperty("quality"))
                object.quality = message.quality;
            if (message.save != null && message.hasOwnProperty("save"))
                object.save = message.save;
            return object;
        };

        /**
         * Converts this WashItemRes to JSON.
         * @function toJSON
         * @memberof game.WashItemRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WashItemRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WashItemRes
         * @function getTypeUrl
         * @memberof game.WashItemRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WashItemRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.WashItemRes";
        };

        return WashItemRes;
    })();

    game.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof game
         * @interface IPlayer
         * @property {number} id Player id
         * @property {string} name Player name
         * @property {number|null} [bagMax] Player bagMax
         * @property {number|Long|null} [gold] Player gold
         * @property {number|Long|null} [yuanbao] Player yuanbao
         * @property {number} job Player job
         * @property {number} rebirth Player rebirth
         * @property {number} exp Player exp
         * @property {number} level Player level
         * @property {number|Long|null} [lastLoginTime] Player lastLoginTime
         * @property {number|null} [loginDays] Player loginDays
         * @property {number|Long|null} [lastSignTime] Player lastSignTime
         * @property {number|null} [signProgress] Player signProgress
         * @property {number|null} [growthState1] Player growthState1
         * @property {number|null} [growthState2] Player growthState2
         */

        /**
         * Constructs a new Player.
         * @memberof game
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {game.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player id.
         * @member {number} id
         * @memberof game.Player
         * @instance
         */
        Player.prototype.id = 0;

        /**
         * Player name.
         * @member {string} name
         * @memberof game.Player
         * @instance
         */
        Player.prototype.name = "";

        /**
         * Player bagMax.
         * @member {number} bagMax
         * @memberof game.Player
         * @instance
         */
        Player.prototype.bagMax = 0;

        /**
         * Player gold.
         * @member {number|Long} gold
         * @memberof game.Player
         * @instance
         */
        Player.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player yuanbao.
         * @member {number|Long} yuanbao
         * @memberof game.Player
         * @instance
         */
        Player.prototype.yuanbao = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player job.
         * @member {number} job
         * @memberof game.Player
         * @instance
         */
        Player.prototype.job = 0;

        /**
         * Player rebirth.
         * @member {number} rebirth
         * @memberof game.Player
         * @instance
         */
        Player.prototype.rebirth = 0;

        /**
         * Player exp.
         * @member {number} exp
         * @memberof game.Player
         * @instance
         */
        Player.prototype.exp = 0;

        /**
         * Player level.
         * @member {number} level
         * @memberof game.Player
         * @instance
         */
        Player.prototype.level = 0;

        /**
         * Player lastLoginTime.
         * @member {number|Long} lastLoginTime
         * @memberof game.Player
         * @instance
         */
        Player.prototype.lastLoginTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player loginDays.
         * @member {number} loginDays
         * @memberof game.Player
         * @instance
         */
        Player.prototype.loginDays = 0;

        /**
         * Player lastSignTime.
         * @member {number|Long} lastSignTime
         * @memberof game.Player
         * @instance
         */
        Player.prototype.lastSignTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player signProgress.
         * @member {number} signProgress
         * @memberof game.Player
         * @instance
         */
        Player.prototype.signProgress = 0;

        /**
         * Player growthState1.
         * @member {number} growthState1
         * @memberof game.Player
         * @instance
         */
        Player.prototype.growthState1 = 0;

        /**
         * Player growthState2.
         * @member {number} growthState2
         * @memberof game.Player
         * @instance
         */
        Player.prototype.growthState2 = 0;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof game.Player
         * @static
         * @param {game.IPlayer=} [properties] Properties to set
         * @returns {game.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link game.Player.verify|verify} messages.
         * @function encode
         * @memberof game.Player
         * @static
         * @param {game.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.bagMax != null && Object.hasOwnProperty.call(message, "bagMax"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.bagMax);
            if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.gold);
            if (message.yuanbao != null && Object.hasOwnProperty.call(message, "yuanbao"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.yuanbao);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.job);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.rebirth);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.exp);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.level);
            if (message.lastLoginTime != null && Object.hasOwnProperty.call(message, "lastLoginTime"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.lastLoginTime);
            if (message.loginDays != null && Object.hasOwnProperty.call(message, "loginDays"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.loginDays);
            if (message.lastSignTime != null && Object.hasOwnProperty.call(message, "lastSignTime"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.lastSignTime);
            if (message.signProgress != null && Object.hasOwnProperty.call(message, "signProgress"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.signProgress);
            if (message.growthState1 != null && Object.hasOwnProperty.call(message, "growthState1"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.growthState1);
            if (message.growthState2 != null && Object.hasOwnProperty.call(message, "growthState2"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.growthState2);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link game.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Player
         * @static
         * @param {game.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof game.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Player();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.bagMax = reader.int32();
                        break;
                    }
                case 4: {
                        message.gold = reader.int64();
                        break;
                    }
                case 5: {
                        message.yuanbao = reader.int64();
                        break;
                    }
                case 6: {
                        message.job = reader.int32();
                        break;
                    }
                case 7: {
                        message.rebirth = reader.int32();
                        break;
                    }
                case 8: {
                        message.exp = reader.int32();
                        break;
                    }
                case 9: {
                        message.level = reader.int32();
                        break;
                    }
                case 10: {
                        message.lastLoginTime = reader.int64();
                        break;
                    }
                case 11: {
                        message.loginDays = reader.int32();
                        break;
                    }
                case 12: {
                        message.lastSignTime = reader.int64();
                        break;
                    }
                case 13: {
                        message.signProgress = reader.int32();
                        break;
                    }
                case 14: {
                        message.growthState1 = reader.int32();
                        break;
                    }
                case 15: {
                        message.growthState2 = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("job"))
                throw $util.ProtocolError("missing required 'job'", { instance: message });
            if (!message.hasOwnProperty("rebirth"))
                throw $util.ProtocolError("missing required 'rebirth'", { instance: message });
            if (!message.hasOwnProperty("exp"))
                throw $util.ProtocolError("missing required 'exp'", { instance: message });
            if (!message.hasOwnProperty("level"))
                throw $util.ProtocolError("missing required 'level'", { instance: message });
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof game.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.bagMax != null && message.hasOwnProperty("bagMax"))
                if (!$util.isInteger(message.bagMax))
                    return "bagMax: integer expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold) && !(message.gold && $util.isInteger(message.gold.low) && $util.isInteger(message.gold.high)))
                    return "gold: integer|Long expected";
            if (message.yuanbao != null && message.hasOwnProperty("yuanbao"))
                if (!$util.isInteger(message.yuanbao) && !(message.yuanbao && $util.isInteger(message.yuanbao.low) && $util.isInteger(message.yuanbao.high)))
                    return "yuanbao: integer|Long expected";
            if (!$util.isInteger(message.job))
                return "job: integer expected";
            if (!$util.isInteger(message.rebirth))
                return "rebirth: integer expected";
            if (!$util.isInteger(message.exp))
                return "exp: integer expected";
            if (!$util.isInteger(message.level))
                return "level: integer expected";
            if (message.lastLoginTime != null && message.hasOwnProperty("lastLoginTime"))
                if (!$util.isInteger(message.lastLoginTime) && !(message.lastLoginTime && $util.isInteger(message.lastLoginTime.low) && $util.isInteger(message.lastLoginTime.high)))
                    return "lastLoginTime: integer|Long expected";
            if (message.loginDays != null && message.hasOwnProperty("loginDays"))
                if (!$util.isInteger(message.loginDays))
                    return "loginDays: integer expected";
            if (message.lastSignTime != null && message.hasOwnProperty("lastSignTime"))
                if (!$util.isInteger(message.lastSignTime) && !(message.lastSignTime && $util.isInteger(message.lastSignTime.low) && $util.isInteger(message.lastSignTime.high)))
                    return "lastSignTime: integer|Long expected";
            if (message.signProgress != null && message.hasOwnProperty("signProgress"))
                if (!$util.isInteger(message.signProgress))
                    return "signProgress: integer expected";
            if (message.growthState1 != null && message.hasOwnProperty("growthState1"))
                if (!$util.isInteger(message.growthState1))
                    return "growthState1: integer expected";
            if (message.growthState2 != null && message.hasOwnProperty("growthState2"))
                if (!$util.isInteger(message.growthState2))
                    return "growthState2: integer expected";
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Player)
                return object;
            let message = new $root.game.Player();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.bagMax != null)
                message.bagMax = object.bagMax | 0;
            if (object.gold != null)
                if ($util.Long)
                    (message.gold = $util.Long.fromValue(object.gold)).unsigned = false;
                else if (typeof object.gold === "string")
                    message.gold = parseInt(object.gold, 10);
                else if (typeof object.gold === "number")
                    message.gold = object.gold;
                else if (typeof object.gold === "object")
                    message.gold = new $util.LongBits(object.gold.low >>> 0, object.gold.high >>> 0).toNumber();
            if (object.yuanbao != null)
                if ($util.Long)
                    (message.yuanbao = $util.Long.fromValue(object.yuanbao)).unsigned = false;
                else if (typeof object.yuanbao === "string")
                    message.yuanbao = parseInt(object.yuanbao, 10);
                else if (typeof object.yuanbao === "number")
                    message.yuanbao = object.yuanbao;
                else if (typeof object.yuanbao === "object")
                    message.yuanbao = new $util.LongBits(object.yuanbao.low >>> 0, object.yuanbao.high >>> 0).toNumber();
            if (object.job != null)
                message.job = object.job | 0;
            if (object.rebirth != null)
                message.rebirth = object.rebirth | 0;
            if (object.exp != null)
                message.exp = object.exp | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.lastLoginTime != null)
                if ($util.Long)
                    (message.lastLoginTime = $util.Long.fromValue(object.lastLoginTime)).unsigned = false;
                else if (typeof object.lastLoginTime === "string")
                    message.lastLoginTime = parseInt(object.lastLoginTime, 10);
                else if (typeof object.lastLoginTime === "number")
                    message.lastLoginTime = object.lastLoginTime;
                else if (typeof object.lastLoginTime === "object")
                    message.lastLoginTime = new $util.LongBits(object.lastLoginTime.low >>> 0, object.lastLoginTime.high >>> 0).toNumber();
            if (object.loginDays != null)
                message.loginDays = object.loginDays | 0;
            if (object.lastSignTime != null)
                if ($util.Long)
                    (message.lastSignTime = $util.Long.fromValue(object.lastSignTime)).unsigned = false;
                else if (typeof object.lastSignTime === "string")
                    message.lastSignTime = parseInt(object.lastSignTime, 10);
                else if (typeof object.lastSignTime === "number")
                    message.lastSignTime = object.lastSignTime;
                else if (typeof object.lastSignTime === "object")
                    message.lastSignTime = new $util.LongBits(object.lastSignTime.low >>> 0, object.lastSignTime.high >>> 0).toNumber();
            if (object.signProgress != null)
                message.signProgress = object.signProgress | 0;
            if (object.growthState1 != null)
                message.growthState1 = object.growthState1 | 0;
            if (object.growthState2 != null)
                message.growthState2 = object.growthState2 | 0;
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Player
         * @static
         * @param {game.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.bagMax = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gold = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.yuanbao = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.yuanbao = options.longs === String ? "0" : 0;
                object.job = 0;
                object.rebirth = 0;
                object.exp = 0;
                object.level = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lastLoginTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastLoginTime = options.longs === String ? "0" : 0;
                object.loginDays = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lastSignTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastSignTime = options.longs === String ? "0" : 0;
                object.signProgress = 0;
                object.growthState1 = 0;
                object.growthState2 = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.bagMax != null && message.hasOwnProperty("bagMax"))
                object.bagMax = message.bagMax;
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (typeof message.gold === "number")
                    object.gold = options.longs === String ? String(message.gold) : message.gold;
                else
                    object.gold = options.longs === String ? $util.Long.prototype.toString.call(message.gold) : options.longs === Number ? new $util.LongBits(message.gold.low >>> 0, message.gold.high >>> 0).toNumber() : message.gold;
            if (message.yuanbao != null && message.hasOwnProperty("yuanbao"))
                if (typeof message.yuanbao === "number")
                    object.yuanbao = options.longs === String ? String(message.yuanbao) : message.yuanbao;
                else
                    object.yuanbao = options.longs === String ? $util.Long.prototype.toString.call(message.yuanbao) : options.longs === Number ? new $util.LongBits(message.yuanbao.low >>> 0, message.yuanbao.high >>> 0).toNumber() : message.yuanbao;
            if (message.job != null && message.hasOwnProperty("job"))
                object.job = message.job;
            if (message.rebirth != null && message.hasOwnProperty("rebirth"))
                object.rebirth = message.rebirth;
            if (message.exp != null && message.hasOwnProperty("exp"))
                object.exp = message.exp;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.lastLoginTime != null && message.hasOwnProperty("lastLoginTime"))
                if (typeof message.lastLoginTime === "number")
                    object.lastLoginTime = options.longs === String ? String(message.lastLoginTime) : message.lastLoginTime;
                else
                    object.lastLoginTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastLoginTime) : options.longs === Number ? new $util.LongBits(message.lastLoginTime.low >>> 0, message.lastLoginTime.high >>> 0).toNumber() : message.lastLoginTime;
            if (message.loginDays != null && message.hasOwnProperty("loginDays"))
                object.loginDays = message.loginDays;
            if (message.lastSignTime != null && message.hasOwnProperty("lastSignTime"))
                if (typeof message.lastSignTime === "number")
                    object.lastSignTime = options.longs === String ? String(message.lastSignTime) : message.lastSignTime;
                else
                    object.lastSignTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastSignTime) : options.longs === Number ? new $util.LongBits(message.lastSignTime.low >>> 0, message.lastSignTime.high >>> 0).toNumber() : message.lastSignTime;
            if (message.signProgress != null && message.hasOwnProperty("signProgress"))
                object.signProgress = message.signProgress;
            if (message.growthState1 != null && message.hasOwnProperty("growthState1"))
                object.growthState1 = message.growthState1;
            if (message.growthState2 != null && message.hasOwnProperty("growthState2"))
                object.growthState2 = message.growthState2;
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof game.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Player
         * @function getTypeUrl
         * @memberof game.Player
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Player.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Player";
        };

        return Player;
    })();

    game.Skill = (function() {

        /**
         * Properties of a Skill.
         * @memberof game
         * @interface ISkill
         * @property {number} id Skill id
         * @property {number} cfgId Skill cfgId
         * @property {number} level Skill level
         * @property {number} exp Skill exp
         */

        /**
         * Constructs a new Skill.
         * @memberof game
         * @classdesc Represents a Skill.
         * @implements ISkill
         * @constructor
         * @param {game.ISkill=} [properties] Properties to set
         */
        function Skill(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Skill id.
         * @member {number} id
         * @memberof game.Skill
         * @instance
         */
        Skill.prototype.id = 0;

        /**
         * Skill cfgId.
         * @member {number} cfgId
         * @memberof game.Skill
         * @instance
         */
        Skill.prototype.cfgId = 0;

        /**
         * Skill level.
         * @member {number} level
         * @memberof game.Skill
         * @instance
         */
        Skill.prototype.level = 0;

        /**
         * Skill exp.
         * @member {number} exp
         * @memberof game.Skill
         * @instance
         */
        Skill.prototype.exp = 0;

        /**
         * Creates a new Skill instance using the specified properties.
         * @function create
         * @memberof game.Skill
         * @static
         * @param {game.ISkill=} [properties] Properties to set
         * @returns {game.Skill} Skill instance
         */
        Skill.create = function create(properties) {
            return new Skill(properties);
        };

        /**
         * Encodes the specified Skill message. Does not implicitly {@link game.Skill.verify|verify} messages.
         * @function encode
         * @memberof game.Skill
         * @static
         * @param {game.ISkill} message Skill message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Skill.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cfgId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.level);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.exp);
            return writer;
        };

        /**
         * Encodes the specified Skill message, length delimited. Does not implicitly {@link game.Skill.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Skill
         * @static
         * @param {game.ISkill} message Skill message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Skill.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Skill message from the specified reader or buffer.
         * @function decode
         * @memberof game.Skill
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Skill} Skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Skill.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Skill();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.cfgId = reader.int32();
                        break;
                    }
                case 3: {
                        message.level = reader.int32();
                        break;
                    }
                case 4: {
                        message.exp = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("cfgId"))
                throw $util.ProtocolError("missing required 'cfgId'", { instance: message });
            if (!message.hasOwnProperty("level"))
                throw $util.ProtocolError("missing required 'level'", { instance: message });
            if (!message.hasOwnProperty("exp"))
                throw $util.ProtocolError("missing required 'exp'", { instance: message });
            return message;
        };

        /**
         * Decodes a Skill message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Skill
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Skill} Skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Skill.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Skill message.
         * @function verify
         * @memberof game.Skill
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Skill.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.cfgId))
                return "cfgId: integer expected";
            if (!$util.isInteger(message.level))
                return "level: integer expected";
            if (!$util.isInteger(message.exp))
                return "exp: integer expected";
            return null;
        };

        /**
         * Creates a Skill message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Skill
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Skill} Skill
         */
        Skill.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Skill)
                return object;
            let message = new $root.game.Skill();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.cfgId != null)
                message.cfgId = object.cfgId | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.exp != null)
                message.exp = object.exp | 0;
            return message;
        };

        /**
         * Creates a plain object from a Skill message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Skill
         * @static
         * @param {game.Skill} message Skill
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Skill.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.cfgId = 0;
                object.level = 0;
                object.exp = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.cfgId != null && message.hasOwnProperty("cfgId"))
                object.cfgId = message.cfgId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.exp != null && message.hasOwnProperty("exp"))
                object.exp = message.exp;
            return object;
        };

        /**
         * Converts this Skill to JSON.
         * @function toJSON
         * @memberof game.Skill
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Skill.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Skill
         * @function getTypeUrl
         * @memberof game.Skill
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Skill.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Skill";
        };

        return Skill;
    })();

    game.SkillInfoReq = (function() {

        /**
         * Properties of a SkillInfoReq.
         * @memberof game
         * @interface ISkillInfoReq
         */

        /**
         * Constructs a new SkillInfoReq.
         * @memberof game
         * @classdesc Represents a SkillInfoReq.
         * @implements ISkillInfoReq
         * @constructor
         * @param {game.ISkillInfoReq=} [properties] Properties to set
         */
        function SkillInfoReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SkillInfoReq instance using the specified properties.
         * @function create
         * @memberof game.SkillInfoReq
         * @static
         * @param {game.ISkillInfoReq=} [properties] Properties to set
         * @returns {game.SkillInfoReq} SkillInfoReq instance
         */
        SkillInfoReq.create = function create(properties) {
            return new SkillInfoReq(properties);
        };

        /**
         * Encodes the specified SkillInfoReq message. Does not implicitly {@link game.SkillInfoReq.verify|verify} messages.
         * @function encode
         * @memberof game.SkillInfoReq
         * @static
         * @param {game.ISkillInfoReq} message SkillInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SkillInfoReq message, length delimited. Does not implicitly {@link game.SkillInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.SkillInfoReq
         * @static
         * @param {game.ISkillInfoReq} message SkillInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SkillInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.SkillInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.SkillInfoReq} SkillInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.SkillInfoReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SkillInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.SkillInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.SkillInfoReq} SkillInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SkillInfoReq message.
         * @function verify
         * @memberof game.SkillInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SkillInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SkillInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.SkillInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.SkillInfoReq} SkillInfoReq
         */
        SkillInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.SkillInfoReq)
                return object;
            return new $root.game.SkillInfoReq();
        };

        /**
         * Creates a plain object from a SkillInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.SkillInfoReq
         * @static
         * @param {game.SkillInfoReq} message SkillInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SkillInfoReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SkillInfoReq to JSON.
         * @function toJSON
         * @memberof game.SkillInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SkillInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SkillInfoReq
         * @function getTypeUrl
         * @memberof game.SkillInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SkillInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.SkillInfoReq";
        };

        return SkillInfoReq;
    })();

    game.SkillInfoRes = (function() {

        /**
         * Properties of a SkillInfoRes.
         * @memberof game
         * @interface ISkillInfoRes
         * @property {number} code SkillInfoRes code
         * @property {string|null} [msg] SkillInfoRes msg
         * @property {Array.<game.ISkill>|null} [skillList] SkillInfoRes skillList
         */

        /**
         * Constructs a new SkillInfoRes.
         * @memberof game
         * @classdesc Represents a SkillInfoRes.
         * @implements ISkillInfoRes
         * @constructor
         * @param {game.ISkillInfoRes=} [properties] Properties to set
         */
        function SkillInfoRes(properties) {
            this.skillList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SkillInfoRes code.
         * @member {number} code
         * @memberof game.SkillInfoRes
         * @instance
         */
        SkillInfoRes.prototype.code = 0;

        /**
         * SkillInfoRes msg.
         * @member {string} msg
         * @memberof game.SkillInfoRes
         * @instance
         */
        SkillInfoRes.prototype.msg = "";

        /**
         * SkillInfoRes skillList.
         * @member {Array.<game.ISkill>} skillList
         * @memberof game.SkillInfoRes
         * @instance
         */
        SkillInfoRes.prototype.skillList = $util.emptyArray;

        /**
         * Creates a new SkillInfoRes instance using the specified properties.
         * @function create
         * @memberof game.SkillInfoRes
         * @static
         * @param {game.ISkillInfoRes=} [properties] Properties to set
         * @returns {game.SkillInfoRes} SkillInfoRes instance
         */
        SkillInfoRes.create = function create(properties) {
            return new SkillInfoRes(properties);
        };

        /**
         * Encodes the specified SkillInfoRes message. Does not implicitly {@link game.SkillInfoRes.verify|verify} messages.
         * @function encode
         * @memberof game.SkillInfoRes
         * @static
         * @param {game.ISkillInfoRes} message SkillInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillInfoRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.skillList != null && message.skillList.length)
                for (let i = 0; i < message.skillList.length; ++i)
                    $root.game.Skill.encode(message.skillList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SkillInfoRes message, length delimited. Does not implicitly {@link game.SkillInfoRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.SkillInfoRes
         * @static
         * @param {game.ISkillInfoRes} message SkillInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillInfoRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SkillInfoRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.SkillInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.SkillInfoRes} SkillInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillInfoRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.SkillInfoRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.skillList && message.skillList.length))
                            message.skillList = [];
                        message.skillList.push($root.game.Skill.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a SkillInfoRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.SkillInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.SkillInfoRes} SkillInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillInfoRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SkillInfoRes message.
         * @function verify
         * @memberof game.SkillInfoRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SkillInfoRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.skillList != null && message.hasOwnProperty("skillList")) {
                if (!Array.isArray(message.skillList))
                    return "skillList: array expected";
                for (let i = 0; i < message.skillList.length; ++i) {
                    let error = $root.game.Skill.verify(message.skillList[i]);
                    if (error)
                        return "skillList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SkillInfoRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.SkillInfoRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.SkillInfoRes} SkillInfoRes
         */
        SkillInfoRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.SkillInfoRes)
                return object;
            let message = new $root.game.SkillInfoRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.skillList) {
                if (!Array.isArray(object.skillList))
                    throw TypeError(".game.SkillInfoRes.skillList: array expected");
                message.skillList = [];
                for (let i = 0; i < object.skillList.length; ++i) {
                    if (typeof object.skillList[i] !== "object")
                        throw TypeError(".game.SkillInfoRes.skillList: object expected");
                    message.skillList[i] = $root.game.Skill.fromObject(object.skillList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SkillInfoRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.SkillInfoRes
         * @static
         * @param {game.SkillInfoRes} message SkillInfoRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SkillInfoRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.skillList = [];
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.skillList && message.skillList.length) {
                object.skillList = [];
                for (let j = 0; j < message.skillList.length; ++j)
                    object.skillList[j] = $root.game.Skill.toObject(message.skillList[j], options);
            }
            return object;
        };

        /**
         * Converts this SkillInfoRes to JSON.
         * @function toJSON
         * @memberof game.SkillInfoRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SkillInfoRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SkillInfoRes
         * @function getTypeUrl
         * @memberof game.SkillInfoRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SkillInfoRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.SkillInfoRes";
        };

        return SkillInfoRes;
    })();

    game.UpdateSkillReq = (function() {

        /**
         * Properties of an UpdateSkillReq.
         * @memberof game
         * @interface IUpdateSkillReq
         * @property {number} skillId UpdateSkillReq skillId
         */

        /**
         * Constructs a new UpdateSkillReq.
         * @memberof game
         * @classdesc Represents an UpdateSkillReq.
         * @implements IUpdateSkillReq
         * @constructor
         * @param {game.IUpdateSkillReq=} [properties] Properties to set
         */
        function UpdateSkillReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateSkillReq skillId.
         * @member {number} skillId
         * @memberof game.UpdateSkillReq
         * @instance
         */
        UpdateSkillReq.prototype.skillId = 0;

        /**
         * Creates a new UpdateSkillReq instance using the specified properties.
         * @function create
         * @memberof game.UpdateSkillReq
         * @static
         * @param {game.IUpdateSkillReq=} [properties] Properties to set
         * @returns {game.UpdateSkillReq} UpdateSkillReq instance
         */
        UpdateSkillReq.create = function create(properties) {
            return new UpdateSkillReq(properties);
        };

        /**
         * Encodes the specified UpdateSkillReq message. Does not implicitly {@link game.UpdateSkillReq.verify|verify} messages.
         * @function encode
         * @memberof game.UpdateSkillReq
         * @static
         * @param {game.IUpdateSkillReq} message UpdateSkillReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateSkillReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.skillId);
            return writer;
        };

        /**
         * Encodes the specified UpdateSkillReq message, length delimited. Does not implicitly {@link game.UpdateSkillReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UpdateSkillReq
         * @static
         * @param {game.IUpdateSkillReq} message UpdateSkillReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateSkillReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateSkillReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.UpdateSkillReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UpdateSkillReq} UpdateSkillReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateSkillReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.UpdateSkillReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.skillId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("skillId"))
                throw $util.ProtocolError("missing required 'skillId'", { instance: message });
            return message;
        };

        /**
         * Decodes an UpdateSkillReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UpdateSkillReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UpdateSkillReq} UpdateSkillReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateSkillReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateSkillReq message.
         * @function verify
         * @memberof game.UpdateSkillReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateSkillReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.skillId))
                return "skillId: integer expected";
            return null;
        };

        /**
         * Creates an UpdateSkillReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UpdateSkillReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UpdateSkillReq} UpdateSkillReq
         */
        UpdateSkillReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.UpdateSkillReq)
                return object;
            let message = new $root.game.UpdateSkillReq();
            if (object.skillId != null)
                message.skillId = object.skillId | 0;
            return message;
        };

        /**
         * Creates a plain object from an UpdateSkillReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UpdateSkillReq
         * @static
         * @param {game.UpdateSkillReq} message UpdateSkillReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateSkillReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.skillId = 0;
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                object.skillId = message.skillId;
            return object;
        };

        /**
         * Converts this UpdateSkillReq to JSON.
         * @function toJSON
         * @memberof game.UpdateSkillReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateSkillReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateSkillReq
         * @function getTypeUrl
         * @memberof game.UpdateSkillReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateSkillReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.UpdateSkillReq";
        };

        return UpdateSkillReq;
    })();

    game.UpdateSkillRes = (function() {

        /**
         * Properties of an UpdateSkillRes.
         * @memberof game
         * @interface IUpdateSkillRes
         * @property {number} code UpdateSkillRes code
         * @property {string|null} [msg] UpdateSkillRes msg
         */

        /**
         * Constructs a new UpdateSkillRes.
         * @memberof game
         * @classdesc Represents an UpdateSkillRes.
         * @implements IUpdateSkillRes
         * @constructor
         * @param {game.IUpdateSkillRes=} [properties] Properties to set
         */
        function UpdateSkillRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateSkillRes code.
         * @member {number} code
         * @memberof game.UpdateSkillRes
         * @instance
         */
        UpdateSkillRes.prototype.code = 0;

        /**
         * UpdateSkillRes msg.
         * @member {string} msg
         * @memberof game.UpdateSkillRes
         * @instance
         */
        UpdateSkillRes.prototype.msg = "";

        /**
         * Creates a new UpdateSkillRes instance using the specified properties.
         * @function create
         * @memberof game.UpdateSkillRes
         * @static
         * @param {game.IUpdateSkillRes=} [properties] Properties to set
         * @returns {game.UpdateSkillRes} UpdateSkillRes instance
         */
        UpdateSkillRes.create = function create(properties) {
            return new UpdateSkillRes(properties);
        };

        /**
         * Encodes the specified UpdateSkillRes message. Does not implicitly {@link game.UpdateSkillRes.verify|verify} messages.
         * @function encode
         * @memberof game.UpdateSkillRes
         * @static
         * @param {game.IUpdateSkillRes} message UpdateSkillRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateSkillRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified UpdateSkillRes message, length delimited. Does not implicitly {@link game.UpdateSkillRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UpdateSkillRes
         * @static
         * @param {game.IUpdateSkillRes} message UpdateSkillRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateSkillRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateSkillRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.UpdateSkillRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UpdateSkillRes} UpdateSkillRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateSkillRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.UpdateSkillRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes an UpdateSkillRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UpdateSkillRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UpdateSkillRes} UpdateSkillRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateSkillRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateSkillRes message.
         * @function verify
         * @memberof game.UpdateSkillRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateSkillRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates an UpdateSkillRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UpdateSkillRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UpdateSkillRes} UpdateSkillRes
         */
        UpdateSkillRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.UpdateSkillRes)
                return object;
            let message = new $root.game.UpdateSkillRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an UpdateSkillRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UpdateSkillRes
         * @static
         * @param {game.UpdateSkillRes} message UpdateSkillRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateSkillRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this UpdateSkillRes to JSON.
         * @function toJSON
         * @memberof game.UpdateSkillRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateSkillRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateSkillRes
         * @function getTypeUrl
         * @memberof game.UpdateSkillRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateSkillRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.UpdateSkillRes";
        };

        return UpdateSkillRes;
    })();

    game.Task = (function() {

        /**
         * Properties of a Task.
         * @memberof game
         * @interface ITask
         * @property {number} id Task id
         * @property {number} type Task type
         * @property {number} cfgId Task cfgId
         */

        /**
         * Constructs a new Task.
         * @memberof game
         * @classdesc Represents a Task.
         * @implements ITask
         * @constructor
         * @param {game.ITask=} [properties] Properties to set
         */
        function Task(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Task id.
         * @member {number} id
         * @memberof game.Task
         * @instance
         */
        Task.prototype.id = 0;

        /**
         * Task type.
         * @member {number} type
         * @memberof game.Task
         * @instance
         */
        Task.prototype.type = 0;

        /**
         * Task cfgId.
         * @member {number} cfgId
         * @memberof game.Task
         * @instance
         */
        Task.prototype.cfgId = 0;

        /**
         * Creates a new Task instance using the specified properties.
         * @function create
         * @memberof game.Task
         * @static
         * @param {game.ITask=} [properties] Properties to set
         * @returns {game.Task} Task instance
         */
        Task.create = function create(properties) {
            return new Task(properties);
        };

        /**
         * Encodes the specified Task message. Does not implicitly {@link game.Task.verify|verify} messages.
         * @function encode
         * @memberof game.Task
         * @static
         * @param {game.ITask} message Task message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Task.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cfgId);
            return writer;
        };

        /**
         * Encodes the specified Task message, length delimited. Does not implicitly {@link game.Task.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Task
         * @static
         * @param {game.ITask} message Task message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Task.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Task message from the specified reader or buffer.
         * @function decode
         * @memberof game.Task
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Task} Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Task.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Task();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                case 3: {
                        message.cfgId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("cfgId"))
                throw $util.ProtocolError("missing required 'cfgId'", { instance: message });
            return message;
        };

        /**
         * Decodes a Task message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Task
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Task} Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Task.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Task message.
         * @function verify
         * @memberof game.Task
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Task.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isInteger(message.cfgId))
                return "cfgId: integer expected";
            return null;
        };

        /**
         * Creates a Task message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Task
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Task} Task
         */
        Task.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Task)
                return object;
            let message = new $root.game.Task();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.cfgId != null)
                message.cfgId = object.cfgId | 0;
            return message;
        };

        /**
         * Creates a plain object from a Task message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Task
         * @static
         * @param {game.Task} message Task
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Task.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.type = 0;
                object.cfgId = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.cfgId != null && message.hasOwnProperty("cfgId"))
                object.cfgId = message.cfgId;
            return object;
        };

        /**
         * Converts this Task to JSON.
         * @function toJSON
         * @memberof game.Task
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Task.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Task
         * @function getTypeUrl
         * @memberof game.Task
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Task.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.Task";
        };

        return Task;
    })();

    game.TaskReceiveReq = (function() {

        /**
         * Properties of a TaskReceiveReq.
         * @memberof game
         * @interface ITaskReceiveReq
         * @property {number} type TaskReceiveReq type
         * @property {number} cfgId TaskReceiveReq cfgId
         */

        /**
         * Constructs a new TaskReceiveReq.
         * @memberof game
         * @classdesc Represents a TaskReceiveReq.
         * @implements ITaskReceiveReq
         * @constructor
         * @param {game.ITaskReceiveReq=} [properties] Properties to set
         */
        function TaskReceiveReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaskReceiveReq type.
         * @member {number} type
         * @memberof game.TaskReceiveReq
         * @instance
         */
        TaskReceiveReq.prototype.type = 0;

        /**
         * TaskReceiveReq cfgId.
         * @member {number} cfgId
         * @memberof game.TaskReceiveReq
         * @instance
         */
        TaskReceiveReq.prototype.cfgId = 0;

        /**
         * Creates a new TaskReceiveReq instance using the specified properties.
         * @function create
         * @memberof game.TaskReceiveReq
         * @static
         * @param {game.ITaskReceiveReq=} [properties] Properties to set
         * @returns {game.TaskReceiveReq} TaskReceiveReq instance
         */
        TaskReceiveReq.create = function create(properties) {
            return new TaskReceiveReq(properties);
        };

        /**
         * Encodes the specified TaskReceiveReq message. Does not implicitly {@link game.TaskReceiveReq.verify|verify} messages.
         * @function encode
         * @memberof game.TaskReceiveReq
         * @static
         * @param {game.ITaskReceiveReq} message TaskReceiveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskReceiveReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cfgId);
            return writer;
        };

        /**
         * Encodes the specified TaskReceiveReq message, length delimited. Does not implicitly {@link game.TaskReceiveReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.TaskReceiveReq
         * @static
         * @param {game.ITaskReceiveReq} message TaskReceiveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskReceiveReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TaskReceiveReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.TaskReceiveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.TaskReceiveReq} TaskReceiveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskReceiveReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.TaskReceiveReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.cfgId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("cfgId"))
                throw $util.ProtocolError("missing required 'cfgId'", { instance: message });
            return message;
        };

        /**
         * Decodes a TaskReceiveReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.TaskReceiveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.TaskReceiveReq} TaskReceiveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskReceiveReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TaskReceiveReq message.
         * @function verify
         * @memberof game.TaskReceiveReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TaskReceiveReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isInteger(message.cfgId))
                return "cfgId: integer expected";
            return null;
        };

        /**
         * Creates a TaskReceiveReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.TaskReceiveReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.TaskReceiveReq} TaskReceiveReq
         */
        TaskReceiveReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.TaskReceiveReq)
                return object;
            let message = new $root.game.TaskReceiveReq();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.cfgId != null)
                message.cfgId = object.cfgId | 0;
            return message;
        };

        /**
         * Creates a plain object from a TaskReceiveReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.TaskReceiveReq
         * @static
         * @param {game.TaskReceiveReq} message TaskReceiveReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaskReceiveReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = 0;
                object.cfgId = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.cfgId != null && message.hasOwnProperty("cfgId"))
                object.cfgId = message.cfgId;
            return object;
        };

        /**
         * Converts this TaskReceiveReq to JSON.
         * @function toJSON
         * @memberof game.TaskReceiveReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaskReceiveReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TaskReceiveReq
         * @function getTypeUrl
         * @memberof game.TaskReceiveReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TaskReceiveReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.TaskReceiveReq";
        };

        return TaskReceiveReq;
    })();

    game.TaskReceiveRes = (function() {

        /**
         * Properties of a TaskReceiveRes.
         * @memberof game
         * @interface ITaskReceiveRes
         * @property {number} code TaskReceiveRes code
         * @property {string|null} [msg] TaskReceiveRes msg
         * @property {game.IRewardCost|null} [reward] TaskReceiveRes reward
         */

        /**
         * Constructs a new TaskReceiveRes.
         * @memberof game
         * @classdesc Represents a TaskReceiveRes.
         * @implements ITaskReceiveRes
         * @constructor
         * @param {game.ITaskReceiveRes=} [properties] Properties to set
         */
        function TaskReceiveRes(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaskReceiveRes code.
         * @member {number} code
         * @memberof game.TaskReceiveRes
         * @instance
         */
        TaskReceiveRes.prototype.code = 0;

        /**
         * TaskReceiveRes msg.
         * @member {string} msg
         * @memberof game.TaskReceiveRes
         * @instance
         */
        TaskReceiveRes.prototype.msg = "";

        /**
         * TaskReceiveRes reward.
         * @member {game.IRewardCost|null|undefined} reward
         * @memberof game.TaskReceiveRes
         * @instance
         */
        TaskReceiveRes.prototype.reward = null;

        /**
         * Creates a new TaskReceiveRes instance using the specified properties.
         * @function create
         * @memberof game.TaskReceiveRes
         * @static
         * @param {game.ITaskReceiveRes=} [properties] Properties to set
         * @returns {game.TaskReceiveRes} TaskReceiveRes instance
         */
        TaskReceiveRes.create = function create(properties) {
            return new TaskReceiveRes(properties);
        };

        /**
         * Encodes the specified TaskReceiveRes message. Does not implicitly {@link game.TaskReceiveRes.verify|verify} messages.
         * @function encode
         * @memberof game.TaskReceiveRes
         * @static
         * @param {game.ITaskReceiveRes} message TaskReceiveRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskReceiveRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                $root.game.RewardCost.encode(message.reward, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TaskReceiveRes message, length delimited. Does not implicitly {@link game.TaskReceiveRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.TaskReceiveRes
         * @static
         * @param {game.ITaskReceiveRes} message TaskReceiveRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskReceiveRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TaskReceiveRes message from the specified reader or buffer.
         * @function decode
         * @memberof game.TaskReceiveRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.TaskReceiveRes} TaskReceiveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskReceiveRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.TaskReceiveRes();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.reward = $root.game.RewardCost.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a TaskReceiveRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.TaskReceiveRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.TaskReceiveRes} TaskReceiveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskReceiveRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TaskReceiveRes message.
         * @function verify
         * @memberof game.TaskReceiveRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TaskReceiveRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                let error = $root.game.RewardCost.verify(message.reward);
                if (error)
                    return "reward." + error;
            }
            return null;
        };

        /**
         * Creates a TaskReceiveRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.TaskReceiveRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.TaskReceiveRes} TaskReceiveRes
         */
        TaskReceiveRes.fromObject = function fromObject(object) {
            if (object instanceof $root.game.TaskReceiveRes)
                return object;
            let message = new $root.game.TaskReceiveRes();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.reward != null) {
                if (typeof object.reward !== "object")
                    throw TypeError(".game.TaskReceiveRes.reward: object expected");
                message.reward = $root.game.RewardCost.fromObject(object.reward);
            }
            return message;
        };

        /**
         * Creates a plain object from a TaskReceiveRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.TaskReceiveRes
         * @static
         * @param {game.TaskReceiveRes} message TaskReceiveRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaskReceiveRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.reward = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.reward != null && message.hasOwnProperty("reward"))
                object.reward = $root.game.RewardCost.toObject(message.reward, options);
            return object;
        };

        /**
         * Converts this TaskReceiveRes to JSON.
         * @function toJSON
         * @memberof game.TaskReceiveRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaskReceiveRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TaskReceiveRes
         * @function getTypeUrl
         * @memberof game.TaskReceiveRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TaskReceiveRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.TaskReceiveRes";
        };

        return TaskReceiveRes;
    })();

    return game;
})();

export { $root as default };
