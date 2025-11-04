import type { Long } from "protobufjs";
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** Namespace game. */
export namespace game {

    /** Properties of a Counts. */
    interface ICounts {
    }

    /** Represents a Counts. */
    class Counts implements ICounts {

        /**
         * Constructs a new Counts.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ICounts);

        /**
         * Creates a new Counts instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Counts instance
         */
        public static create(properties?: game.ICounts): game.Counts;

        /**
         * Encodes the specified Counts message. Does not implicitly {@link game.Counts.verify|verify} messages.
         * @param message Counts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ICounts, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Counts message, length delimited. Does not implicitly {@link game.Counts.verify|verify} messages.
         * @param message Counts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ICounts, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Counts message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Counts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.Counts;

        /**
         * Decodes a Counts message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Counts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.Counts;

        /**
         * Verifies a Counts message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Counts message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Counts
         */
        public static fromObject(object: { [k: string]: any }): game.Counts;

        /**
         * Creates a plain object from a Counts message. Also converts values to other types if specified.
         * @param message Counts
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Counts, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Counts to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Counts
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ErrorCode enum. */
    enum ErrorCode {
        SUCCESS = 0,
        FAILED = 1,
        NETERR = 2,
        RESTART = 999
    }

    /** Properties of a Caches. */
    interface ICaches {

        /** Caches settings */
        settings?: ({ [k: string]: number }|null);

        /** Caches games */
        games?: ({ [k: string]: number }|null);

        /** Caches days */
        days?: ({ [k: string]: number }|null);
    }

    /** Represents a Caches. */
    class Caches implements ICaches {

        /**
         * Constructs a new Caches.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ICaches);

        /** Caches settings. */
        public settings: { [k: string]: number };

        /** Caches games. */
        public games: { [k: string]: number };

        /** Caches days. */
        public days: { [k: string]: number };

        /**
         * Creates a new Caches instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Caches instance
         */
        public static create(properties?: game.ICaches): game.Caches;

        /**
         * Encodes the specified Caches message. Does not implicitly {@link game.Caches.verify|verify} messages.
         * @param message Caches message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ICaches, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Caches message, length delimited. Does not implicitly {@link game.Caches.verify|verify} messages.
         * @param message Caches message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ICaches, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Caches message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Caches
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.Caches;

        /**
         * Decodes a Caches message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Caches
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.Caches;

        /**
         * Verifies a Caches message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Caches message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Caches
         */
        public static fromObject(object: { [k: string]: any }): game.Caches;

        /**
         * Creates a plain object from a Caches message. Also converts values to other types if specified.
         * @param message Caches
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Caches, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Caches to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Caches
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BattleItem. */
    interface IBattleItem {

        /** BattleItem itemId */
        itemId: number;

        /** BattleItem count */
        count: number;
    }

    /** Represents a BattleItem. */
    class BattleItem implements IBattleItem {

        /**
         * Constructs a new BattleItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleItem);

        /** BattleItem itemId. */
        public itemId: number;

        /** BattleItem count. */
        public count: number;

        /**
         * Creates a new BattleItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleItem instance
         */
        public static create(properties?: game.IBattleItem): game.BattleItem;

        /**
         * Encodes the specified BattleItem message. Does not implicitly {@link game.BattleItem.verify|verify} messages.
         * @param message BattleItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BattleItem message, length delimited. Does not implicitly {@link game.BattleItem.verify|verify} messages.
         * @param message BattleItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BattleItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.BattleItem;

        /**
         * Decodes a BattleItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.BattleItem;

        /**
         * Verifies a BattleItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleItem
         */
        public static fromObject(object: { [k: string]: any }): game.BattleItem;

        /**
         * Creates a plain object from a BattleItem message. Also converts values to other types if specified.
         * @param message BattleItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleItem, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BattleItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq account */
        account: string;

        /** LoginReq password */
        password: string;
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ILoginReq);

        /** LoginReq account. */
        public account: string;

        /** LoginReq password. */
        public password: string;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReq instance
         */
        public static create(properties?: game.ILoginReq): game.LoginReq;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link game.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ILoginReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link game.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ILoginReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.LoginReq;

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.LoginReq;

        /**
         * Verifies a LoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReq
         */
        public static fromObject(object: { [k: string]: any }): game.LoginReq;

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @param message LoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.LoginReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginRes. */
    interface ILoginRes {

        /** LoginRes code */
        code: number;

        /** LoginRes msg */
        msg?: (string|null);

        /** LoginRes player */
        player?: (game.IPlayer[]|null);
    }

    /** Represents a LoginRes. */
    class LoginRes implements ILoginRes {

        /**
         * Constructs a new LoginRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ILoginRes);

        /** LoginRes code. */
        public code: number;

        /** LoginRes msg. */
        public msg: string;

        /** LoginRes player. */
        public player: game.IPlayer[];

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRes instance
         */
        public static create(properties?: game.ILoginRes): game.LoginRes;

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link game.LoginRes.verify|verify} messages.
         * @param message LoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ILoginRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link game.LoginRes.verify|verify} messages.
         * @param message LoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ILoginRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.LoginRes;

        /**
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.LoginRes;

        /**
         * Verifies a LoginRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRes
         */
        public static fromObject(object: { [k: string]: any }): game.LoginRes;

        /**
         * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
         * @param message LoginRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.LoginRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegisterReq. */
    interface IRegisterReq {

        /** RegisterReq account */
        account: string;

        /** RegisterReq password */
        password: string;
    }

    /** Represents a RegisterReq. */
    class RegisterReq implements IRegisterReq {

        /**
         * Constructs a new RegisterReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IRegisterReq);

        /** RegisterReq account. */
        public account: string;

        /** RegisterReq password. */
        public password: string;

        /**
         * Creates a new RegisterReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterReq instance
         */
        public static create(properties?: game.IRegisterReq): game.RegisterReq;

        /**
         * Encodes the specified RegisterReq message. Does not implicitly {@link game.RegisterReq.verify|verify} messages.
         * @param message RegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IRegisterReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RegisterReq message, length delimited. Does not implicitly {@link game.RegisterReq.verify|verify} messages.
         * @param message RegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IRegisterReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RegisterReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.RegisterReq;

        /**
         * Decodes a RegisterReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.RegisterReq;

        /**
         * Verifies a RegisterReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterReq
         */
        public static fromObject(object: { [k: string]: any }): game.RegisterReq;

        /**
         * Creates a plain object from a RegisterReq message. Also converts values to other types if specified.
         * @param message RegisterReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.RegisterReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegisterRes. */
    interface IRegisterRes {

        /** RegisterRes code */
        code: number;

        /** RegisterRes msg */
        msg?: (string|null);
    }

    /** Represents a RegisterRes. */
    class RegisterRes implements IRegisterRes {

        /**
         * Constructs a new RegisterRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IRegisterRes);

        /** RegisterRes code. */
        public code: number;

        /** RegisterRes msg. */
        public msg: string;

        /**
         * Creates a new RegisterRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterRes instance
         */
        public static create(properties?: game.IRegisterRes): game.RegisterRes;

        /**
         * Encodes the specified RegisterRes message. Does not implicitly {@link game.RegisterRes.verify|verify} messages.
         * @param message RegisterRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IRegisterRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RegisterRes message, length delimited. Does not implicitly {@link game.RegisterRes.verify|verify} messages.
         * @param message RegisterRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IRegisterRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RegisterRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.RegisterRes;

        /**
         * Decodes a RegisterRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.RegisterRes;

        /**
         * Verifies a RegisterRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterRes
         */
        public static fromObject(object: { [k: string]: any }): game.RegisterRes;

        /**
         * Creates a plain object from a RegisterRes message. Also converts values to other types if specified.
         * @param message RegisterRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.RegisterRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateReq. */
    interface ICreateReq {

        /** CreateReq name */
        name: string;

        /** CreateReq job */
        job: number;
    }

    /** Represents a CreateReq. */
    class CreateReq implements ICreateReq {

        /**
         * Constructs a new CreateReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ICreateReq);

        /** CreateReq name. */
        public name: string;

        /** CreateReq job. */
        public job: number;

        /**
         * Creates a new CreateReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateReq instance
         */
        public static create(properties?: game.ICreateReq): game.CreateReq;

        /**
         * Encodes the specified CreateReq message. Does not implicitly {@link game.CreateReq.verify|verify} messages.
         * @param message CreateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ICreateReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CreateReq message, length delimited. Does not implicitly {@link game.CreateReq.verify|verify} messages.
         * @param message CreateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ICreateReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CreateReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.CreateReq;

        /**
         * Decodes a CreateReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.CreateReq;

        /**
         * Verifies a CreateReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateReq
         */
        public static fromObject(object: { [k: string]: any }): game.CreateReq;

        /**
         * Creates a plain object from a CreateReq message. Also converts values to other types if specified.
         * @param message CreateReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.CreateReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateRes. */
    interface ICreateRes {

        /** CreateRes code */
        code: number;

        /** CreateRes msg */
        msg?: (string|null);

        /** CreateRes player */
        player?: (game.IPlayer|null);
    }

    /** Represents a CreateRes. */
    class CreateRes implements ICreateRes {

        /**
         * Constructs a new CreateRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ICreateRes);

        /** CreateRes code. */
        public code: number;

        /** CreateRes msg. */
        public msg: string;

        /** CreateRes player. */
        public player?: (game.IPlayer|null);

        /**
         * Creates a new CreateRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRes instance
         */
        public static create(properties?: game.ICreateRes): game.CreateRes;

        /**
         * Encodes the specified CreateRes message. Does not implicitly {@link game.CreateRes.verify|verify} messages.
         * @param message CreateRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ICreateRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CreateRes message, length delimited. Does not implicitly {@link game.CreateRes.verify|verify} messages.
         * @param message CreateRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ICreateRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CreateRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.CreateRes;

        /**
         * Decodes a CreateRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.CreateRes;

        /**
         * Verifies a CreateRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRes
         */
        public static fromObject(object: { [k: string]: any }): game.CreateRes;

        /**
         * Creates a plain object from a CreateRes message. Also converts values to other types if specified.
         * @param message CreateRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.CreateRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SelectReq. */
    interface ISelectReq {

        /** SelectReq playerId */
        playerId: number;
    }

    /** Represents a SelectReq. */
    class SelectReq implements ISelectReq {

        /**
         * Constructs a new SelectReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ISelectReq);

        /** SelectReq playerId. */
        public playerId: number;

        /**
         * Creates a new SelectReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SelectReq instance
         */
        public static create(properties?: game.ISelectReq): game.SelectReq;

        /**
         * Encodes the specified SelectReq message. Does not implicitly {@link game.SelectReq.verify|verify} messages.
         * @param message SelectReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ISelectReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SelectReq message, length delimited. Does not implicitly {@link game.SelectReq.verify|verify} messages.
         * @param message SelectReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ISelectReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SelectReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SelectReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.SelectReq;

        /**
         * Decodes a SelectReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SelectReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.SelectReq;

        /**
         * Verifies a SelectReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SelectReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SelectReq
         */
        public static fromObject(object: { [k: string]: any }): game.SelectReq;

        /**
         * Creates a plain object from a SelectReq message. Also converts values to other types if specified.
         * @param message SelectReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.SelectReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SelectReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SelectReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SelectRes. */
    interface ISelectRes {

        /** SelectRes code */
        code: number;

        /** SelectRes msg */
        msg?: (string|null);

        /** SelectRes player */
        player?: (game.IPlayer|null);

        /** SelectRes skills */
        skills?: (game.ISkill[]|null);

        /** SelectRes items */
        items?: (game.IItem[]|null);

        /** SelectRes parts */
        parts?: (game.IPart[]|null);

        /** SelectRes growths */
        growths?: (game.IGrowth[]|null);

        /** SelectRes caches */
        caches: game.ICaches;
    }

    /** Represents a SelectRes. */
    class SelectRes implements ISelectRes {

        /**
         * Constructs a new SelectRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ISelectRes);

        /** SelectRes code. */
        public code: number;

        /** SelectRes msg. */
        public msg: string;

        /** SelectRes player. */
        public player?: (game.IPlayer|null);

        /** SelectRes skills. */
        public skills: game.ISkill[];

        /** SelectRes items. */
        public items: game.IItem[];

        /** SelectRes parts. */
        public parts: game.IPart[];

        /** SelectRes growths. */
        public growths: game.IGrowth[];

        /** SelectRes caches. */
        public caches: game.ICaches;

        /**
         * Creates a new SelectRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SelectRes instance
         */
        public static create(properties?: game.ISelectRes): game.SelectRes;

        /**
         * Encodes the specified SelectRes message. Does not implicitly {@link game.SelectRes.verify|verify} messages.
         * @param message SelectRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ISelectRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SelectRes message, length delimited. Does not implicitly {@link game.SelectRes.verify|verify} messages.
         * @param message SelectRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ISelectRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SelectRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SelectRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.SelectRes;

        /**
         * Decodes a SelectRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SelectRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.SelectRes;

        /**
         * Verifies a SelectRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SelectRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SelectRes
         */
        public static fromObject(object: { [k: string]: any }): game.SelectRes;

        /**
         * Creates a plain object from a SelectRes message. Also converts values to other types if specified.
         * @param message SelectRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.SelectRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SelectRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SelectRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PayReq. */
    interface IPayReq {

        /** PayReq type */
        type: number;

        /** PayReq id */
        id: number;
    }

    /** Represents a PayReq. */
    class PayReq implements IPayReq {

        /**
         * Constructs a new PayReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPayReq);

        /** PayReq type. */
        public type: number;

        /** PayReq id. */
        public id: number;

        /**
         * Creates a new PayReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PayReq instance
         */
        public static create(properties?: game.IPayReq): game.PayReq;

        /**
         * Encodes the specified PayReq message. Does not implicitly {@link game.PayReq.verify|verify} messages.
         * @param message PayReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPayReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PayReq message, length delimited. Does not implicitly {@link game.PayReq.verify|verify} messages.
         * @param message PayReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPayReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PayReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PayReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.PayReq;

        /**
         * Decodes a PayReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PayReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.PayReq;

        /**
         * Verifies a PayReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PayReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PayReq
         */
        public static fromObject(object: { [k: string]: any }): game.PayReq;

        /**
         * Creates a plain object from a PayReq message. Also converts values to other types if specified.
         * @param message PayReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.PayReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PayReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PayReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerTimeReq. */
    interface IServerTimeReq {

        /** ServerTimeReq isClear */
        isClear: boolean;

        /** ServerTimeReq time */
        time?: (number|Long|null);
    }

    /** Represents a ServerTimeReq. */
    class ServerTimeReq implements IServerTimeReq {

        /**
         * Constructs a new ServerTimeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IServerTimeReq);

        /** ServerTimeReq isClear. */
        public isClear: boolean;

        /** ServerTimeReq time. */
        public time: (number|Long);

        /**
         * Creates a new ServerTimeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerTimeReq instance
         */
        public static create(properties?: game.IServerTimeReq): game.ServerTimeReq;

        /**
         * Encodes the specified ServerTimeReq message. Does not implicitly {@link game.ServerTimeReq.verify|verify} messages.
         * @param message ServerTimeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IServerTimeReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ServerTimeReq message, length delimited. Does not implicitly {@link game.ServerTimeReq.verify|verify} messages.
         * @param message ServerTimeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IServerTimeReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ServerTimeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerTimeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ServerTimeReq;

        /**
         * Decodes a ServerTimeReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerTimeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ServerTimeReq;

        /**
         * Verifies a ServerTimeReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerTimeReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerTimeReq
         */
        public static fromObject(object: { [k: string]: any }): game.ServerTimeReq;

        /**
         * Creates a plain object from a ServerTimeReq message. Also converts values to other types if specified.
         * @param message ServerTimeReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.ServerTimeReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerTimeReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerTimeReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerTimeRes. */
    interface IServerTimeRes {

        /** ServerTimeRes code */
        code: number;

        /** ServerTimeRes msg */
        msg?: (string|null);

        /** ServerTimeRes time */
        time?: (number|Long|null);

        /** ServerTimeRes isClear */
        isClear?: (boolean|null);
    }

    /** Represents a ServerTimeRes. */
    class ServerTimeRes implements IServerTimeRes {

        /**
         * Constructs a new ServerTimeRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IServerTimeRes);

        /** ServerTimeRes code. */
        public code: number;

        /** ServerTimeRes msg. */
        public msg: string;

        /** ServerTimeRes time. */
        public time: (number|Long);

        /** ServerTimeRes isClear. */
        public isClear: boolean;

        /**
         * Creates a new ServerTimeRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerTimeRes instance
         */
        public static create(properties?: game.IServerTimeRes): game.ServerTimeRes;

        /**
         * Encodes the specified ServerTimeRes message. Does not implicitly {@link game.ServerTimeRes.verify|verify} messages.
         * @param message ServerTimeRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IServerTimeRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ServerTimeRes message, length delimited. Does not implicitly {@link game.ServerTimeRes.verify|verify} messages.
         * @param message ServerTimeRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IServerTimeRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ServerTimeRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerTimeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ServerTimeRes;

        /**
         * Decodes a ServerTimeRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerTimeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ServerTimeRes;

        /**
         * Verifies a ServerTimeRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerTimeRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerTimeRes
         */
        public static fromObject(object: { [k: string]: any }): game.ServerTimeRes;

        /**
         * Creates a plain object from a ServerTimeRes message. Also converts values to other types if specified.
         * @param message ServerTimeRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.ServerTimeRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerTimeRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerTimeRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SaveSettingReq. */
    interface ISaveSettingReq {

        /** SaveSettingReq key */
        key: string;

        /** SaveSettingReq value */
        value: number;
    }

    /** Represents a SaveSettingReq. */
    class SaveSettingReq implements ISaveSettingReq {

        /**
         * Constructs a new SaveSettingReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ISaveSettingReq);

        /** SaveSettingReq key. */
        public key: string;

        /** SaveSettingReq value. */
        public value: number;

        /**
         * Creates a new SaveSettingReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SaveSettingReq instance
         */
        public static create(properties?: game.ISaveSettingReq): game.SaveSettingReq;

        /**
         * Encodes the specified SaveSettingReq message. Does not implicitly {@link game.SaveSettingReq.verify|verify} messages.
         * @param message SaveSettingReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ISaveSettingReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SaveSettingReq message, length delimited. Does not implicitly {@link game.SaveSettingReq.verify|verify} messages.
         * @param message SaveSettingReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ISaveSettingReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SaveSettingReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SaveSettingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.SaveSettingReq;

        /**
         * Decodes a SaveSettingReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SaveSettingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.SaveSettingReq;

        /**
         * Verifies a SaveSettingReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SaveSettingReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SaveSettingReq
         */
        public static fromObject(object: { [k: string]: any }): game.SaveSettingReq;

        /**
         * Creates a plain object from a SaveSettingReq message. Also converts values to other types if specified.
         * @param message SaveSettingReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.SaveSettingReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SaveSettingReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SaveSettingReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SaveSettingRes. */
    interface ISaveSettingRes {

        /** SaveSettingRes code */
        code: number;

        /** SaveSettingRes msg */
        msg?: (string|null);
    }

    /** Represents a SaveSettingRes. */
    class SaveSettingRes implements ISaveSettingRes {

        /**
         * Constructs a new SaveSettingRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ISaveSettingRes);

        /** SaveSettingRes code. */
        public code: number;

        /** SaveSettingRes msg. */
        public msg: string;

        /**
         * Creates a new SaveSettingRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SaveSettingRes instance
         */
        public static create(properties?: game.ISaveSettingRes): game.SaveSettingRes;

        /**
         * Encodes the specified SaveSettingRes message. Does not implicitly {@link game.SaveSettingRes.verify|verify} messages.
         * @param message SaveSettingRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ISaveSettingRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SaveSettingRes message, length delimited. Does not implicitly {@link game.SaveSettingRes.verify|verify} messages.
         * @param message SaveSettingRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ISaveSettingRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SaveSettingRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SaveSettingRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.SaveSettingRes;

        /**
         * Decodes a SaveSettingRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SaveSettingRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.SaveSettingRes;

        /**
         * Verifies a SaveSettingRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SaveSettingRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SaveSettingRes
         */
        public static fromObject(object: { [k: string]: any }): game.SaveSettingRes;

        /**
         * Creates a plain object from a SaveSettingRes message. Also converts values to other types if specified.
         * @param message SaveSettingRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.SaveSettingRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SaveSettingRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SaveSettingRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EnterMapReq. */
    interface IEnterMapReq {

        /** EnterMapReq mapId */
        mapId: number;
    }

    /** Represents an EnterMapReq. */
    class EnterMapReq implements IEnterMapReq {

        /**
         * Constructs a new EnterMapReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IEnterMapReq);

        /** EnterMapReq mapId. */
        public mapId: number;

        /**
         * Creates a new EnterMapReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterMapReq instance
         */
        public static create(properties?: game.IEnterMapReq): game.EnterMapReq;

        /**
         * Encodes the specified EnterMapReq message. Does not implicitly {@link game.EnterMapReq.verify|verify} messages.
         * @param message EnterMapReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IEnterMapReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EnterMapReq message, length delimited. Does not implicitly {@link game.EnterMapReq.verify|verify} messages.
         * @param message EnterMapReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IEnterMapReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EnterMapReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterMapReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.EnterMapReq;

        /**
         * Decodes an EnterMapReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterMapReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.EnterMapReq;

        /**
         * Verifies an EnterMapReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterMapReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterMapReq
         */
        public static fromObject(object: { [k: string]: any }): game.EnterMapReq;

        /**
         * Creates a plain object from an EnterMapReq message. Also converts values to other types if specified.
         * @param message EnterMapReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.EnterMapReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterMapReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EnterMapReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EnterMapRes. */
    interface IEnterMapRes {

        /** EnterMapRes code */
        code: number;

        /** EnterMapRes msg */
        msg?: (string|null);
    }

    /** Represents an EnterMapRes. */
    class EnterMapRes implements IEnterMapRes {

        /**
         * Constructs a new EnterMapRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IEnterMapRes);

        /** EnterMapRes code. */
        public code: number;

        /** EnterMapRes msg. */
        public msg: string;

        /**
         * Creates a new EnterMapRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterMapRes instance
         */
        public static create(properties?: game.IEnterMapRes): game.EnterMapRes;

        /**
         * Encodes the specified EnterMapRes message. Does not implicitly {@link game.EnterMapRes.verify|verify} messages.
         * @param message EnterMapRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IEnterMapRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EnterMapRes message, length delimited. Does not implicitly {@link game.EnterMapRes.verify|verify} messages.
         * @param message EnterMapRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IEnterMapRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EnterMapRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterMapRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.EnterMapRes;

        /**
         * Decodes an EnterMapRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterMapRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.EnterMapRes;

        /**
         * Verifies an EnterMapRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterMapRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterMapRes
         */
        public static fromObject(object: { [k: string]: any }): game.EnterMapRes;

        /**
         * Creates a plain object from an EnterMapRes message. Also converts values to other types if specified.
         * @param message EnterMapRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.EnterMapRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterMapRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EnterMapRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RefreshMonsterReq. */
    interface IRefreshMonsterReq {

        /** RefreshMonsterReq mapId */
        mapId: number;

        /** RefreshMonsterReq count */
        count: number;
    }

    /** Represents a RefreshMonsterReq. */
    class RefreshMonsterReq implements IRefreshMonsterReq {

        /**
         * Constructs a new RefreshMonsterReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IRefreshMonsterReq);

        /** RefreshMonsterReq mapId. */
        public mapId: number;

        /** RefreshMonsterReq count. */
        public count: number;

        /**
         * Creates a new RefreshMonsterReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RefreshMonsterReq instance
         */
        public static create(properties?: game.IRefreshMonsterReq): game.RefreshMonsterReq;

        /**
         * Encodes the specified RefreshMonsterReq message. Does not implicitly {@link game.RefreshMonsterReq.verify|verify} messages.
         * @param message RefreshMonsterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IRefreshMonsterReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RefreshMonsterReq message, length delimited. Does not implicitly {@link game.RefreshMonsterReq.verify|verify} messages.
         * @param message RefreshMonsterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IRefreshMonsterReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RefreshMonsterReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RefreshMonsterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.RefreshMonsterReq;

        /**
         * Decodes a RefreshMonsterReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RefreshMonsterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.RefreshMonsterReq;

        /**
         * Verifies a RefreshMonsterReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RefreshMonsterReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RefreshMonsterReq
         */
        public static fromObject(object: { [k: string]: any }): game.RefreshMonsterReq;

        /**
         * Creates a plain object from a RefreshMonsterReq message. Also converts values to other types if specified.
         * @param message RefreshMonsterReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.RefreshMonsterReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RefreshMonsterReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RefreshMonsterReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RefreshMonsterRes. */
    interface IRefreshMonsterRes {

        /** RefreshMonsterRes code */
        code: number;

        /** RefreshMonsterRes msg */
        msg?: (string|null);

        /** RefreshMonsterRes monsters */
        monsters?: (number[]|null);
    }

    /** Represents a RefreshMonsterRes. */
    class RefreshMonsterRes implements IRefreshMonsterRes {

        /**
         * Constructs a new RefreshMonsterRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IRefreshMonsterRes);

        /** RefreshMonsterRes code. */
        public code: number;

        /** RefreshMonsterRes msg. */
        public msg: string;

        /** RefreshMonsterRes monsters. */
        public monsters: number[];

        /**
         * Creates a new RefreshMonsterRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RefreshMonsterRes instance
         */
        public static create(properties?: game.IRefreshMonsterRes): game.RefreshMonsterRes;

        /**
         * Encodes the specified RefreshMonsterRes message. Does not implicitly {@link game.RefreshMonsterRes.verify|verify} messages.
         * @param message RefreshMonsterRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IRefreshMonsterRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RefreshMonsterRes message, length delimited. Does not implicitly {@link game.RefreshMonsterRes.verify|verify} messages.
         * @param message RefreshMonsterRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IRefreshMonsterRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RefreshMonsterRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RefreshMonsterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.RefreshMonsterRes;

        /**
         * Decodes a RefreshMonsterRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RefreshMonsterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.RefreshMonsterRes;

        /**
         * Verifies a RefreshMonsterRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RefreshMonsterRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RefreshMonsterRes
         */
        public static fromObject(object: { [k: string]: any }): game.RefreshMonsterRes;

        /**
         * Creates a plain object from a RefreshMonsterRes message. Also converts values to other types if specified.
         * @param message RefreshMonsterRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.RefreshMonsterRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RefreshMonsterRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RefreshMonsterRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UseMedicineReq. */
    interface IUseMedicineReq {

        /** UseMedicineReq itemId */
        itemId: number;
    }

    /** Represents a UseMedicineReq. */
    class UseMedicineReq implements IUseMedicineReq {

        /**
         * Constructs a new UseMedicineReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IUseMedicineReq);

        /** UseMedicineReq itemId. */
        public itemId: number;

        /**
         * Creates a new UseMedicineReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UseMedicineReq instance
         */
        public static create(properties?: game.IUseMedicineReq): game.UseMedicineReq;

        /**
         * Encodes the specified UseMedicineReq message. Does not implicitly {@link game.UseMedicineReq.verify|verify} messages.
         * @param message UseMedicineReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IUseMedicineReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UseMedicineReq message, length delimited. Does not implicitly {@link game.UseMedicineReq.verify|verify} messages.
         * @param message UseMedicineReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IUseMedicineReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UseMedicineReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UseMedicineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.UseMedicineReq;

        /**
         * Decodes a UseMedicineReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UseMedicineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.UseMedicineReq;

        /**
         * Verifies a UseMedicineReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UseMedicineReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UseMedicineReq
         */
        public static fromObject(object: { [k: string]: any }): game.UseMedicineReq;

        /**
         * Creates a plain object from a UseMedicineReq message. Also converts values to other types if specified.
         * @param message UseMedicineReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.UseMedicineReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UseMedicineReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UseMedicineReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UseMedicineRes. */
    interface IUseMedicineRes {

        /** UseMedicineRes code */
        code: number;

        /** UseMedicineRes msg */
        msg?: (string|null);
    }

    /** Represents a UseMedicineRes. */
    class UseMedicineRes implements IUseMedicineRes {

        /**
         * Constructs a new UseMedicineRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IUseMedicineRes);

        /** UseMedicineRes code. */
        public code: number;

        /** UseMedicineRes msg. */
        public msg: string;

        /**
         * Creates a new UseMedicineRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UseMedicineRes instance
         */
        public static create(properties?: game.IUseMedicineRes): game.UseMedicineRes;

        /**
         * Encodes the specified UseMedicineRes message. Does not implicitly {@link game.UseMedicineRes.verify|verify} messages.
         * @param message UseMedicineRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IUseMedicineRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UseMedicineRes message, length delimited. Does not implicitly {@link game.UseMedicineRes.verify|verify} messages.
         * @param message UseMedicineRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IUseMedicineRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UseMedicineRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UseMedicineRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.UseMedicineRes;

        /**
         * Decodes a UseMedicineRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UseMedicineRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.UseMedicineRes;

        /**
         * Verifies a UseMedicineRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UseMedicineRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UseMedicineRes
         */
        public static fromObject(object: { [k: string]: any }): game.UseMedicineRes;

        /**
         * Creates a plain object from a UseMedicineRes message. Also converts values to other types if specified.
         * @param message UseMedicineRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.UseMedicineRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UseMedicineRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UseMedicineRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KillMonsterReq. */
    interface IKillMonsterReq {

        /** KillMonsterReq monsterId */
        monsterId: number;

        /** KillMonsterReq mapId */
        mapId: number;
    }

    /** Represents a KillMonsterReq. */
    class KillMonsterReq implements IKillMonsterReq {

        /**
         * Constructs a new KillMonsterReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IKillMonsterReq);

        /** KillMonsterReq monsterId. */
        public monsterId: number;

        /** KillMonsterReq mapId. */
        public mapId: number;

        /**
         * Creates a new KillMonsterReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KillMonsterReq instance
         */
        public static create(properties?: game.IKillMonsterReq): game.KillMonsterReq;

        /**
         * Encodes the specified KillMonsterReq message. Does not implicitly {@link game.KillMonsterReq.verify|verify} messages.
         * @param message KillMonsterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IKillMonsterReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified KillMonsterReq message, length delimited. Does not implicitly {@link game.KillMonsterReq.verify|verify} messages.
         * @param message KillMonsterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IKillMonsterReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a KillMonsterReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KillMonsterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.KillMonsterReq;

        /**
         * Decodes a KillMonsterReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KillMonsterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.KillMonsterReq;

        /**
         * Verifies a KillMonsterReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KillMonsterReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KillMonsterReq
         */
        public static fromObject(object: { [k: string]: any }): game.KillMonsterReq;

        /**
         * Creates a plain object from a KillMonsterReq message. Also converts values to other types if specified.
         * @param message KillMonsterReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.KillMonsterReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KillMonsterReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KillMonsterReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KillMonsterRes. */
    interface IKillMonsterRes {

        /** KillMonsterRes code */
        code: number;

        /** KillMonsterRes msg */
        msg?: (string|null);

        /** KillMonsterRes exp */
        exp?: (number|null);

        /** KillMonsterRes reward */
        reward?: (game.IRewardCost|null);
    }

    /** Represents a KillMonsterRes. */
    class KillMonsterRes implements IKillMonsterRes {

        /**
         * Constructs a new KillMonsterRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IKillMonsterRes);

        /** KillMonsterRes code. */
        public code: number;

        /** KillMonsterRes msg. */
        public msg: string;

        /** KillMonsterRes exp. */
        public exp: number;

        /** KillMonsterRes reward. */
        public reward?: (game.IRewardCost|null);

        /**
         * Creates a new KillMonsterRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KillMonsterRes instance
         */
        public static create(properties?: game.IKillMonsterRes): game.KillMonsterRes;

        /**
         * Encodes the specified KillMonsterRes message. Does not implicitly {@link game.KillMonsterRes.verify|verify} messages.
         * @param message KillMonsterRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IKillMonsterRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified KillMonsterRes message, length delimited. Does not implicitly {@link game.KillMonsterRes.verify|verify} messages.
         * @param message KillMonsterRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IKillMonsterRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a KillMonsterRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KillMonsterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.KillMonsterRes;

        /**
         * Decodes a KillMonsterRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KillMonsterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.KillMonsterRes;

        /**
         * Verifies a KillMonsterRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KillMonsterRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KillMonsterRes
         */
        public static fromObject(object: { [k: string]: any }): game.KillMonsterRes;

        /**
         * Creates a plain object from a KillMonsterRes message. Also converts values to other types if specified.
         * @param message KillMonsterRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.KillMonsterRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KillMonsterRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KillMonsterRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetItemReq. */
    interface IGetItemReq {

        /** GetItemReq itemId */
        itemId: number;

        /** GetItemReq count */
        count: number;
    }

    /** Represents a GetItemReq. */
    class GetItemReq implements IGetItemReq {

        /**
         * Constructs a new GetItemReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGetItemReq);

        /** GetItemReq itemId. */
        public itemId: number;

        /** GetItemReq count. */
        public count: number;

        /**
         * Creates a new GetItemReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetItemReq instance
         */
        public static create(properties?: game.IGetItemReq): game.GetItemReq;

        /**
         * Encodes the specified GetItemReq message. Does not implicitly {@link game.GetItemReq.verify|verify} messages.
         * @param message GetItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGetItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetItemReq message, length delimited. Does not implicitly {@link game.GetItemReq.verify|verify} messages.
         * @param message GetItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGetItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetItemReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.GetItemReq;

        /**
         * Decodes a GetItemReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.GetItemReq;

        /**
         * Verifies a GetItemReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetItemReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetItemReq
         */
        public static fromObject(object: { [k: string]: any }): game.GetItemReq;

        /**
         * Creates a plain object from a GetItemReq message. Also converts values to other types if specified.
         * @param message GetItemReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GetItemReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetItemReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetItemReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetItemRes. */
    interface IGetItemRes {

        /** GetItemRes code */
        code: number;

        /** GetItemRes msg */
        msg?: (string|null);

        /** GetItemRes reward */
        reward?: (game.IRewardCost|null);
    }

    /** Represents a GetItemRes. */
    class GetItemRes implements IGetItemRes {

        /**
         * Constructs a new GetItemRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGetItemRes);

        /** GetItemRes code. */
        public code: number;

        /** GetItemRes msg. */
        public msg: string;

        /** GetItemRes reward. */
        public reward?: (game.IRewardCost|null);

        /**
         * Creates a new GetItemRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetItemRes instance
         */
        public static create(properties?: game.IGetItemRes): game.GetItemRes;

        /**
         * Encodes the specified GetItemRes message. Does not implicitly {@link game.GetItemRes.verify|verify} messages.
         * @param message GetItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGetItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetItemRes message, length delimited. Does not implicitly {@link game.GetItemRes.verify|verify} messages.
         * @param message GetItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGetItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetItemRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.GetItemRes;

        /**
         * Decodes a GetItemRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.GetItemRes;

        /**
         * Verifies a GetItemRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetItemRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetItemRes
         */
        public static fromObject(object: { [k: string]: any }): game.GetItemRes;

        /**
         * Creates a plain object from a GetItemRes message. Also converts values to other types if specified.
         * @param message GetItemRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GetItemRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetItemRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetItemRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RankInfo. */
    interface IRankInfo {

        /** RankInfo playerId */
        playerId: number;

        /** RankInfo name */
        name: string;

        /** RankInfo job */
        job: number;

        /** RankInfo level */
        level: number;

        /** RankInfo rebirth */
        rebirth: number;

        /** RankInfo rankValue */
        rankValue: number;
    }

    /** Represents a RankInfo. */
    class RankInfo implements IRankInfo {

        /**
         * Constructs a new RankInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IRankInfo);

        /** RankInfo playerId. */
        public playerId: number;

        /** RankInfo name. */
        public name: string;

        /** RankInfo job. */
        public job: number;

        /** RankInfo level. */
        public level: number;

        /** RankInfo rebirth. */
        public rebirth: number;

        /** RankInfo rankValue. */
        public rankValue: number;

        /**
         * Creates a new RankInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankInfo instance
         */
        public static create(properties?: game.IRankInfo): game.RankInfo;

        /**
         * Encodes the specified RankInfo message. Does not implicitly {@link game.RankInfo.verify|verify} messages.
         * @param message RankInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IRankInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RankInfo message, length delimited. Does not implicitly {@link game.RankInfo.verify|verify} messages.
         * @param message RankInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IRankInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.RankInfo;

        /**
         * Decodes a RankInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.RankInfo;

        /**
         * Verifies a RankInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RankInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RankInfo
         */
        public static fromObject(object: { [k: string]: any }): game.RankInfo;

        /**
         * Creates a plain object from a RankInfo message. Also converts values to other types if specified.
         * @param message RankInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.RankInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RankInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RankInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetRankReq. */
    interface IGetRankReq {

        /** GetRankReq type */
        type: number;
    }

    /** Represents a GetRankReq. */
    class GetRankReq implements IGetRankReq {

        /**
         * Constructs a new GetRankReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGetRankReq);

        /** GetRankReq type. */
        public type: number;

        /**
         * Creates a new GetRankReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRankReq instance
         */
        public static create(properties?: game.IGetRankReq): game.GetRankReq;

        /**
         * Encodes the specified GetRankReq message. Does not implicitly {@link game.GetRankReq.verify|verify} messages.
         * @param message GetRankReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGetRankReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetRankReq message, length delimited. Does not implicitly {@link game.GetRankReq.verify|verify} messages.
         * @param message GetRankReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGetRankReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetRankReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.GetRankReq;

        /**
         * Decodes a GetRankReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.GetRankReq;

        /**
         * Verifies a GetRankReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRankReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRankReq
         */
        public static fromObject(object: { [k: string]: any }): game.GetRankReq;

        /**
         * Creates a plain object from a GetRankReq message. Also converts values to other types if specified.
         * @param message GetRankReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GetRankReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRankReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetRankReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetRankRes. */
    interface IGetRankRes {

        /** GetRankRes code */
        code: number;

        /** GetRankRes msg */
        msg?: (string|null);

        /** GetRankRes ranks */
        ranks?: (game.IRankInfo[]|null);
    }

    /** Represents a GetRankRes. */
    class GetRankRes implements IGetRankRes {

        /**
         * Constructs a new GetRankRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGetRankRes);

        /** GetRankRes code. */
        public code: number;

        /** GetRankRes msg. */
        public msg: string;

        /** GetRankRes ranks. */
        public ranks: game.IRankInfo[];

        /**
         * Creates a new GetRankRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRankRes instance
         */
        public static create(properties?: game.IGetRankRes): game.GetRankRes;

        /**
         * Encodes the specified GetRankRes message. Does not implicitly {@link game.GetRankRes.verify|verify} messages.
         * @param message GetRankRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGetRankRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetRankRes message, length delimited. Does not implicitly {@link game.GetRankRes.verify|verify} messages.
         * @param message GetRankRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGetRankRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetRankRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRankRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.GetRankRes;

        /**
         * Decodes a GetRankRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRankRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.GetRankRes;

        /**
         * Verifies a GetRankRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRankRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRankRes
         */
        public static fromObject(object: { [k: string]: any }): game.GetRankRes;

        /**
         * Creates a plain object from a GetRankRes message. Also converts values to other types if specified.
         * @param message GetRankRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GetRankRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRankRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetRankRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BuyItemReq. */
    interface IBuyItemReq {

        /** BuyItemReq shopId */
        shopId: number;

        /** BuyItemReq count */
        count: number;
    }

    /** Represents a BuyItemReq. */
    class BuyItemReq implements IBuyItemReq {

        /**
         * Constructs a new BuyItemReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBuyItemReq);

        /** BuyItemReq shopId. */
        public shopId: number;

        /** BuyItemReq count. */
        public count: number;

        /**
         * Creates a new BuyItemReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyItemReq instance
         */
        public static create(properties?: game.IBuyItemReq): game.BuyItemReq;

        /**
         * Encodes the specified BuyItemReq message. Does not implicitly {@link game.BuyItemReq.verify|verify} messages.
         * @param message BuyItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBuyItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyItemReq message, length delimited. Does not implicitly {@link game.BuyItemReq.verify|verify} messages.
         * @param message BuyItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBuyItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyItemReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.BuyItemReq;

        /**
         * Decodes a BuyItemReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.BuyItemReq;

        /**
         * Verifies a BuyItemReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BuyItemReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuyItemReq
         */
        public static fromObject(object: { [k: string]: any }): game.BuyItemReq;

        /**
         * Creates a plain object from a BuyItemReq message. Also converts values to other types if specified.
         * @param message BuyItemReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BuyItemReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuyItemReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BuyItemReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BuyItemRes. */
    interface IBuyItemRes {

        /** BuyItemRes code */
        code: number;

        /** BuyItemRes msg */
        msg?: (string|null);

        /** BuyItemRes reward */
        reward?: (game.IRewardCost|null);

        /** BuyItemRes gold */
        gold?: (number|null);

        /** BuyItemRes yuanbao */
        yuanbao?: (number|null);
    }

    /** Represents a BuyItemRes. */
    class BuyItemRes implements IBuyItemRes {

        /**
         * Constructs a new BuyItemRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBuyItemRes);

        /** BuyItemRes code. */
        public code: number;

        /** BuyItemRes msg. */
        public msg: string;

        /** BuyItemRes reward. */
        public reward?: (game.IRewardCost|null);

        /** BuyItemRes gold. */
        public gold: number;

        /** BuyItemRes yuanbao. */
        public yuanbao: number;

        /**
         * Creates a new BuyItemRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyItemRes instance
         */
        public static create(properties?: game.IBuyItemRes): game.BuyItemRes;

        /**
         * Encodes the specified BuyItemRes message. Does not implicitly {@link game.BuyItemRes.verify|verify} messages.
         * @param message BuyItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBuyItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyItemRes message, length delimited. Does not implicitly {@link game.BuyItemRes.verify|verify} messages.
         * @param message BuyItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBuyItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyItemRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.BuyItemRes;

        /**
         * Decodes a BuyItemRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.BuyItemRes;

        /**
         * Verifies a BuyItemRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BuyItemRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuyItemRes
         */
        public static fromObject(object: { [k: string]: any }): game.BuyItemRes;

        /**
         * Creates a plain object from a BuyItemRes message. Also converts values to other types if specified.
         * @param message BuyItemRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BuyItemRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuyItemRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BuyItemRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Growth. */
    interface IGrowth {

        /** Growth id */
        id: number;

        /** Growth cfgId */
        cfgId: number;

        /** Growth type */
        type: number;
    }

    /** Represents a Growth. */
    class Growth implements IGrowth {

        /**
         * Constructs a new Growth.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGrowth);

        /** Growth id. */
        public id: number;

        /** Growth cfgId. */
        public cfgId: number;

        /** Growth type. */
        public type: number;

        /**
         * Creates a new Growth instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Growth instance
         */
        public static create(properties?: game.IGrowth): game.Growth;

        /**
         * Encodes the specified Growth message. Does not implicitly {@link game.Growth.verify|verify} messages.
         * @param message Growth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGrowth, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Growth message, length delimited. Does not implicitly {@link game.Growth.verify|verify} messages.
         * @param message Growth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGrowth, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Growth message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Growth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.Growth;

        /**
         * Decodes a Growth message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Growth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.Growth;

        /**
         * Verifies a Growth message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Growth message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Growth
         */
        public static fromObject(object: { [k: string]: any }): game.Growth;

        /**
         * Creates a plain object from a Growth message. Also converts values to other types if specified.
         * @param message Growth
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Growth, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Growth to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Growth
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GrowthReceiveReq. */
    interface IGrowthReceiveReq {

        /** GrowthReceiveReq type */
        type: number;

        /** GrowthReceiveReq cfgId */
        cfgId: number;
    }

    /** Represents a GrowthReceiveReq. */
    class GrowthReceiveReq implements IGrowthReceiveReq {

        /**
         * Constructs a new GrowthReceiveReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGrowthReceiveReq);

        /** GrowthReceiveReq type. */
        public type: number;

        /** GrowthReceiveReq cfgId. */
        public cfgId: number;

        /**
         * Creates a new GrowthReceiveReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GrowthReceiveReq instance
         */
        public static create(properties?: game.IGrowthReceiveReq): game.GrowthReceiveReq;

        /**
         * Encodes the specified GrowthReceiveReq message. Does not implicitly {@link game.GrowthReceiveReq.verify|verify} messages.
         * @param message GrowthReceiveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGrowthReceiveReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GrowthReceiveReq message, length delimited. Does not implicitly {@link game.GrowthReceiveReq.verify|verify} messages.
         * @param message GrowthReceiveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGrowthReceiveReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GrowthReceiveReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GrowthReceiveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.GrowthReceiveReq;

        /**
         * Decodes a GrowthReceiveReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GrowthReceiveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.GrowthReceiveReq;

        /**
         * Verifies a GrowthReceiveReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GrowthReceiveReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GrowthReceiveReq
         */
        public static fromObject(object: { [k: string]: any }): game.GrowthReceiveReq;

        /**
         * Creates a plain object from a GrowthReceiveReq message. Also converts values to other types if specified.
         * @param message GrowthReceiveReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GrowthReceiveReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GrowthReceiveReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GrowthReceiveReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GrowthReceiveRes. */
    interface IGrowthReceiveRes {

        /** GrowthReceiveRes code */
        code: number;

        /** GrowthReceiveRes msg */
        msg?: (string|null);

        /** GrowthReceiveRes reward */
        reward?: (game.IRewardCost|null);
    }

    /** Represents a GrowthReceiveRes. */
    class GrowthReceiveRes implements IGrowthReceiveRes {

        /**
         * Constructs a new GrowthReceiveRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGrowthReceiveRes);

        /** GrowthReceiveRes code. */
        public code: number;

        /** GrowthReceiveRes msg. */
        public msg: string;

        /** GrowthReceiveRes reward. */
        public reward?: (game.IRewardCost|null);

        /**
         * Creates a new GrowthReceiveRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GrowthReceiveRes instance
         */
        public static create(properties?: game.IGrowthReceiveRes): game.GrowthReceiveRes;

        /**
         * Encodes the specified GrowthReceiveRes message. Does not implicitly {@link game.GrowthReceiveRes.verify|verify} messages.
         * @param message GrowthReceiveRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGrowthReceiveRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GrowthReceiveRes message, length delimited. Does not implicitly {@link game.GrowthReceiveRes.verify|verify} messages.
         * @param message GrowthReceiveRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGrowthReceiveRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GrowthReceiveRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GrowthReceiveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.GrowthReceiveRes;

        /**
         * Decodes a GrowthReceiveRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GrowthReceiveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.GrowthReceiveRes;

        /**
         * Verifies a GrowthReceiveRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GrowthReceiveRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GrowthReceiveRes
         */
        public static fromObject(object: { [k: string]: any }): game.GrowthReceiveRes;

        /**
         * Creates a plain object from a GrowthReceiveRes message. Also converts values to other types if specified.
         * @param message GrowthReceiveRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GrowthReceiveRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GrowthReceiveRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GrowthReceiveRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Mail. */
    interface IMail {

        /** Mail id */
        id: number;

        /** Mail type */
        type: number;

        /** Mail title */
        title: string;

        /** Mail content */
        content: string;

        /** Mail rewards */
        rewards: string;

        /** Mail startTime */
        startTime: (number|Long);

        /** Mail receiveTime */
        receiveTime: (number|Long);
    }

    /** Represents a Mail. */
    class Mail implements IMail {

        /**
         * Constructs a new Mail.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IMail);

        /** Mail id. */
        public id: number;

        /** Mail type. */
        public type: number;

        /** Mail title. */
        public title: string;

        /** Mail content. */
        public content: string;

        /** Mail rewards. */
        public rewards: string;

        /** Mail startTime. */
        public startTime: (number|Long);

        /** Mail receiveTime. */
        public receiveTime: (number|Long);

        /**
         * Creates a new Mail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Mail instance
         */
        public static create(properties?: game.IMail): game.Mail;

        /**
         * Encodes the specified Mail message. Does not implicitly {@link game.Mail.verify|verify} messages.
         * @param message Mail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Mail message, length delimited. Does not implicitly {@link game.Mail.verify|verify} messages.
         * @param message Mail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Mail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Mail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.Mail;

        /**
         * Decodes a Mail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Mail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.Mail;

        /**
         * Verifies a Mail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Mail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Mail
         */
        public static fromObject(object: { [k: string]: any }): game.Mail;

        /**
         * Creates a plain object from a Mail message. Also converts values to other types if specified.
         * @param message Mail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Mail, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Mail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Mail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MailInfoReq. */
    interface IMailInfoReq {

        /** MailInfoReq type */
        type: number;
    }

    /** Represents a MailInfoReq. */
    class MailInfoReq implements IMailInfoReq {

        /**
         * Constructs a new MailInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IMailInfoReq);

        /** MailInfoReq type. */
        public type: number;

        /**
         * Creates a new MailInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailInfoReq instance
         */
        public static create(properties?: game.IMailInfoReq): game.MailInfoReq;

        /**
         * Encodes the specified MailInfoReq message. Does not implicitly {@link game.MailInfoReq.verify|verify} messages.
         * @param message MailInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IMailInfoReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailInfoReq message, length delimited. Does not implicitly {@link game.MailInfoReq.verify|verify} messages.
         * @param message MailInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IMailInfoReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.MailInfoReq;

        /**
         * Decodes a MailInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.MailInfoReq;

        /**
         * Verifies a MailInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailInfoReq
         */
        public static fromObject(object: { [k: string]: any }): game.MailInfoReq;

        /**
         * Creates a plain object from a MailInfoReq message. Also converts values to other types if specified.
         * @param message MailInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.MailInfoReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MailInfoReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MailInfoRes. */
    interface IMailInfoRes {

        /** MailInfoRes code */
        code: number;

        /** MailInfoRes msg */
        msg?: (string|null);

        /** MailInfoRes mailList */
        mailList?: (game.IMail[]|null);
    }

    /** Represents a MailInfoRes. */
    class MailInfoRes implements IMailInfoRes {

        /**
         * Constructs a new MailInfoRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IMailInfoRes);

        /** MailInfoRes code. */
        public code: number;

        /** MailInfoRes msg. */
        public msg: string;

        /** MailInfoRes mailList. */
        public mailList: game.IMail[];

        /**
         * Creates a new MailInfoRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailInfoRes instance
         */
        public static create(properties?: game.IMailInfoRes): game.MailInfoRes;

        /**
         * Encodes the specified MailInfoRes message. Does not implicitly {@link game.MailInfoRes.verify|verify} messages.
         * @param message MailInfoRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IMailInfoRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailInfoRes message, length delimited. Does not implicitly {@link game.MailInfoRes.verify|verify} messages.
         * @param message MailInfoRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IMailInfoRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailInfoRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.MailInfoRes;

        /**
         * Decodes a MailInfoRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.MailInfoRes;

        /**
         * Verifies a MailInfoRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailInfoRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailInfoRes
         */
        public static fromObject(object: { [k: string]: any }): game.MailInfoRes;

        /**
         * Creates a plain object from a MailInfoRes message. Also converts values to other types if specified.
         * @param message MailInfoRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.MailInfoRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailInfoRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MailInfoRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MailReceiveReq. */
    interface IMailReceiveReq {

        /** MailReceiveReq type */
        type: number;

        /** MailReceiveReq mailId */
        mailId: number;
    }

    /** Represents a MailReceiveReq. */
    class MailReceiveReq implements IMailReceiveReq {

        /**
         * Constructs a new MailReceiveReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IMailReceiveReq);

        /** MailReceiveReq type. */
        public type: number;

        /** MailReceiveReq mailId. */
        public mailId: number;

        /**
         * Creates a new MailReceiveReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailReceiveReq instance
         */
        public static create(properties?: game.IMailReceiveReq): game.MailReceiveReq;

        /**
         * Encodes the specified MailReceiveReq message. Does not implicitly {@link game.MailReceiveReq.verify|verify} messages.
         * @param message MailReceiveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IMailReceiveReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailReceiveReq message, length delimited. Does not implicitly {@link game.MailReceiveReq.verify|verify} messages.
         * @param message MailReceiveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IMailReceiveReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailReceiveReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailReceiveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.MailReceiveReq;

        /**
         * Decodes a MailReceiveReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailReceiveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.MailReceiveReq;

        /**
         * Verifies a MailReceiveReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailReceiveReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailReceiveReq
         */
        public static fromObject(object: { [k: string]: any }): game.MailReceiveReq;

        /**
         * Creates a plain object from a MailReceiveReq message. Also converts values to other types if specified.
         * @param message MailReceiveReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.MailReceiveReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailReceiveReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MailReceiveReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MailReceiveRes. */
    interface IMailReceiveRes {

        /** MailReceiveRes code */
        code: number;

        /** MailReceiveRes msg */
        msg?: (string|null);

        /** MailReceiveRes reward */
        reward?: (game.IRewardCost|null);
    }

    /** Represents a MailReceiveRes. */
    class MailReceiveRes implements IMailReceiveRes {

        /**
         * Constructs a new MailReceiveRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IMailReceiveRes);

        /** MailReceiveRes code. */
        public code: number;

        /** MailReceiveRes msg. */
        public msg: string;

        /** MailReceiveRes reward. */
        public reward?: (game.IRewardCost|null);

        /**
         * Creates a new MailReceiveRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailReceiveRes instance
         */
        public static create(properties?: game.IMailReceiveRes): game.MailReceiveRes;

        /**
         * Encodes the specified MailReceiveRes message. Does not implicitly {@link game.MailReceiveRes.verify|verify} messages.
         * @param message MailReceiveRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IMailReceiveRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailReceiveRes message, length delimited. Does not implicitly {@link game.MailReceiveRes.verify|verify} messages.
         * @param message MailReceiveRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IMailReceiveRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailReceiveRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailReceiveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.MailReceiveRes;

        /**
         * Decodes a MailReceiveRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailReceiveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.MailReceiveRes;

        /**
         * Verifies a MailReceiveRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailReceiveRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailReceiveRes
         */
        public static fromObject(object: { [k: string]: any }): game.MailReceiveRes;

        /**
         * Creates a plain object from a MailReceiveRes message. Also converts values to other types if specified.
         * @param message MailReceiveRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.MailReceiveRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailReceiveRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MailReceiveRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Item. */
    interface IItem {

        /** Item id */
        id: number;

        /** Item playerId */
        playerId: number;

        /** Item cfgId */
        cfgId: number;

        /** Item quality */
        quality: number;

        /** Item count */
        count: number;

        /** Item lock */
        lock: boolean;

        /** Item attr */
        attr?: (string|null);
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IItem);

        /** Item id. */
        public id: number;

        /** Item playerId. */
        public playerId: number;

        /** Item cfgId. */
        public cfgId: number;

        /** Item quality. */
        public quality: number;

        /** Item count. */
        public count: number;

        /** Item lock. */
        public lock: boolean;

        /** Item attr. */
        public attr: string;

        /**
         * Creates a new Item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Item instance
         */
        public static create(properties?: game.IItem): game.Item;

        /**
         * Encodes the specified Item message. Does not implicitly {@link game.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link game.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.Item;

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.Item;

        /**
         * Verifies an Item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Item
         */
        public static fromObject(object: { [k: string]: any }): game.Item;

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @param message Item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Item, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Item
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RewardCostItem. */
    interface IRewardCostItem {

        /** RewardCostItem cfgId */
        cfgId: number;

        /** RewardCostItem count */
        count: number;
    }

    /** Represents a RewardCostItem. */
    class RewardCostItem implements IRewardCostItem {

        /**
         * Constructs a new RewardCostItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IRewardCostItem);

        /** RewardCostItem cfgId. */
        public cfgId: number;

        /** RewardCostItem count. */
        public count: number;

        /**
         * Creates a new RewardCostItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RewardCostItem instance
         */
        public static create(properties?: game.IRewardCostItem): game.RewardCostItem;

        /**
         * Encodes the specified RewardCostItem message. Does not implicitly {@link game.RewardCostItem.verify|verify} messages.
         * @param message RewardCostItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IRewardCostItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RewardCostItem message, length delimited. Does not implicitly {@link game.RewardCostItem.verify|verify} messages.
         * @param message RewardCostItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IRewardCostItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RewardCostItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RewardCostItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.RewardCostItem;

        /**
         * Decodes a RewardCostItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RewardCostItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.RewardCostItem;

        /**
         * Verifies a RewardCostItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RewardCostItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RewardCostItem
         */
        public static fromObject(object: { [k: string]: any }): game.RewardCostItem;

        /**
         * Creates a plain object from a RewardCostItem message. Also converts values to other types if specified.
         * @param message RewardCostItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.RewardCostItem, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RewardCostItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RewardCostItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RewardCost. */
    interface IRewardCost {

        /** RewardCost gold */
        gold: number;

        /** RewardCost yuanbao */
        yuanbao: number;

        /** RewardCost inserts */
        inserts?: (game.IItem[]|null);

        /** RewardCost changes */
        changes?: (game.IRewardCostItem[]|null);
    }

    /** Represents a RewardCost. */
    class RewardCost implements IRewardCost {

        /**
         * Constructs a new RewardCost.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IRewardCost);

        /** RewardCost gold. */
        public gold: number;

        /** RewardCost yuanbao. */
        public yuanbao: number;

        /** RewardCost inserts. */
        public inserts: game.IItem[];

        /** RewardCost changes. */
        public changes: game.IRewardCostItem[];

        /**
         * Creates a new RewardCost instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RewardCost instance
         */
        public static create(properties?: game.IRewardCost): game.RewardCost;

        /**
         * Encodes the specified RewardCost message. Does not implicitly {@link game.RewardCost.verify|verify} messages.
         * @param message RewardCost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IRewardCost, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RewardCost message, length delimited. Does not implicitly {@link game.RewardCost.verify|verify} messages.
         * @param message RewardCost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IRewardCost, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RewardCost message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RewardCost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.RewardCost;

        /**
         * Decodes a RewardCost message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RewardCost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.RewardCost;

        /**
         * Verifies a RewardCost message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RewardCost message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RewardCost
         */
        public static fromObject(object: { [k: string]: any }): game.RewardCost;

        /**
         * Creates a plain object from a RewardCost message. Also converts values to other types if specified.
         * @param message RewardCost
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.RewardCost, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RewardCost to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RewardCost
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Part. */
    interface IPart {

        /** Part id */
        id: number;

        /** Part partIndex */
        partIndex: number;

        /** Part strength */
        strength: number;

        /** Part itemId */
        itemId?: (number|null);
    }

    /** Represents a Part. */
    class Part implements IPart {

        /**
         * Constructs a new Part.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPart);

        /** Part id. */
        public id: number;

        /** Part partIndex. */
        public partIndex: number;

        /** Part strength. */
        public strength: number;

        /** Part itemId. */
        public itemId: number;

        /**
         * Creates a new Part instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Part instance
         */
        public static create(properties?: game.IPart): game.Part;

        /**
         * Encodes the specified Part message. Does not implicitly {@link game.Part.verify|verify} messages.
         * @param message Part message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPart, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Part message, length delimited. Does not implicitly {@link game.Part.verify|verify} messages.
         * @param message Part message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPart, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Part message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Part
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.Part;

        /**
         * Decodes a Part message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Part
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.Part;

        /**
         * Verifies a Part message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Part message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Part
         */
        public static fromObject(object: { [k: string]: any }): game.Part;

        /**
         * Creates a plain object from a Part message. Also converts values to other types if specified.
         * @param message Part
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Part, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Part to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Part
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UseItemReq. */
    interface IUseItemReq {

        /** UseItemReq itemId */
        itemId: number;

        /** UseItemReq count */
        count: number;
    }

    /** Represents a UseItemReq. */
    class UseItemReq implements IUseItemReq {

        /**
         * Constructs a new UseItemReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IUseItemReq);

        /** UseItemReq itemId. */
        public itemId: number;

        /** UseItemReq count. */
        public count: number;

        /**
         * Creates a new UseItemReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UseItemReq instance
         */
        public static create(properties?: game.IUseItemReq): game.UseItemReq;

        /**
         * Encodes the specified UseItemReq message. Does not implicitly {@link game.UseItemReq.verify|verify} messages.
         * @param message UseItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IUseItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UseItemReq message, length delimited. Does not implicitly {@link game.UseItemReq.verify|verify} messages.
         * @param message UseItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IUseItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UseItemReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UseItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.UseItemReq;

        /**
         * Decodes a UseItemReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UseItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.UseItemReq;

        /**
         * Verifies a UseItemReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UseItemReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UseItemReq
         */
        public static fromObject(object: { [k: string]: any }): game.UseItemReq;

        /**
         * Creates a plain object from a UseItemReq message. Also converts values to other types if specified.
         * @param message UseItemReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.UseItemReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UseItemReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UseItemReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UseItemRes. */
    interface IUseItemRes {

        /** UseItemRes code */
        code: number;

        /** UseItemRes msg */
        msg?: (string|null);

        /** UseItemRes reward */
        reward?: (game.IRewardCost[]|null);

        /** UseItemRes cost */
        cost?: (game.IRewardCost[]|null);
    }

    /** Represents a UseItemRes. */
    class UseItemRes implements IUseItemRes {

        /**
         * Constructs a new UseItemRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IUseItemRes);

        /** UseItemRes code. */
        public code: number;

        /** UseItemRes msg. */
        public msg: string;

        /** UseItemRes reward. */
        public reward: game.IRewardCost[];

        /** UseItemRes cost. */
        public cost: game.IRewardCost[];

        /**
         * Creates a new UseItemRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UseItemRes instance
         */
        public static create(properties?: game.IUseItemRes): game.UseItemRes;

        /**
         * Encodes the specified UseItemRes message. Does not implicitly {@link game.UseItemRes.verify|verify} messages.
         * @param message UseItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IUseItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UseItemRes message, length delimited. Does not implicitly {@link game.UseItemRes.verify|verify} messages.
         * @param message UseItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IUseItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UseItemRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UseItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.UseItemRes;

        /**
         * Decodes a UseItemRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UseItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.UseItemRes;

        /**
         * Verifies a UseItemRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UseItemRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UseItemRes
         */
        public static fromObject(object: { [k: string]: any }): game.UseItemRes;

        /**
         * Creates a plain object from a UseItemRes message. Also converts values to other types if specified.
         * @param message UseItemRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.UseItemRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UseItemRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UseItemRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StrengthReq. */
    interface IStrengthReq {

        /** StrengthReq partIndex */
        partIndex: number;
    }

    /** Represents a StrengthReq. */
    class StrengthReq implements IStrengthReq {

        /**
         * Constructs a new StrengthReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IStrengthReq);

        /** StrengthReq partIndex. */
        public partIndex: number;

        /**
         * Creates a new StrengthReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StrengthReq instance
         */
        public static create(properties?: game.IStrengthReq): game.StrengthReq;

        /**
         * Encodes the specified StrengthReq message. Does not implicitly {@link game.StrengthReq.verify|verify} messages.
         * @param message StrengthReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IStrengthReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified StrengthReq message, length delimited. Does not implicitly {@link game.StrengthReq.verify|verify} messages.
         * @param message StrengthReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IStrengthReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a StrengthReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StrengthReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.StrengthReq;

        /**
         * Decodes a StrengthReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StrengthReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.StrengthReq;

        /**
         * Verifies a StrengthReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StrengthReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StrengthReq
         */
        public static fromObject(object: { [k: string]: any }): game.StrengthReq;

        /**
         * Creates a plain object from a StrengthReq message. Also converts values to other types if specified.
         * @param message StrengthReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.StrengthReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StrengthReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StrengthReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StrengthRes. */
    interface IStrengthRes {

        /** StrengthRes code */
        code: number;

        /** StrengthRes msg */
        msg?: (string|null);
    }

    /** Represents a StrengthRes. */
    class StrengthRes implements IStrengthRes {

        /**
         * Constructs a new StrengthRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IStrengthRes);

        /** StrengthRes code. */
        public code: number;

        /** StrengthRes msg. */
        public msg: string;

        /**
         * Creates a new StrengthRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StrengthRes instance
         */
        public static create(properties?: game.IStrengthRes): game.StrengthRes;

        /**
         * Encodes the specified StrengthRes message. Does not implicitly {@link game.StrengthRes.verify|verify} messages.
         * @param message StrengthRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IStrengthRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified StrengthRes message, length delimited. Does not implicitly {@link game.StrengthRes.verify|verify} messages.
         * @param message StrengthRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IStrengthRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a StrengthRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StrengthRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.StrengthRes;

        /**
         * Decodes a StrengthRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StrengthRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.StrengthRes;

        /**
         * Verifies a StrengthRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StrengthRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StrengthRes
         */
        public static fromObject(object: { [k: string]: any }): game.StrengthRes;

        /**
         * Creates a plain object from a StrengthRes message. Also converts values to other types if specified.
         * @param message StrengthRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.StrengthRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StrengthRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StrengthRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WearItemReq. */
    interface IWearItemReq {

        /** WearItemReq itemId */
        itemId: number;

        /** WearItemReq partIndex */
        partIndex: number;
    }

    /** Represents a WearItemReq. */
    class WearItemReq implements IWearItemReq {

        /**
         * Constructs a new WearItemReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IWearItemReq);

        /** WearItemReq itemId. */
        public itemId: number;

        /** WearItemReq partIndex. */
        public partIndex: number;

        /**
         * Creates a new WearItemReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WearItemReq instance
         */
        public static create(properties?: game.IWearItemReq): game.WearItemReq;

        /**
         * Encodes the specified WearItemReq message. Does not implicitly {@link game.WearItemReq.verify|verify} messages.
         * @param message WearItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IWearItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified WearItemReq message, length delimited. Does not implicitly {@link game.WearItemReq.verify|verify} messages.
         * @param message WearItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IWearItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a WearItemReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WearItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.WearItemReq;

        /**
         * Decodes a WearItemReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WearItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.WearItemReq;

        /**
         * Verifies a WearItemReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WearItemReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WearItemReq
         */
        public static fromObject(object: { [k: string]: any }): game.WearItemReq;

        /**
         * Creates a plain object from a WearItemReq message. Also converts values to other types if specified.
         * @param message WearItemReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.WearItemReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WearItemReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WearItemReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WearItemRes. */
    interface IWearItemRes {

        /** WearItemRes code */
        code: number;

        /** WearItemRes msg */
        msg?: (string|null);
    }

    /** Represents a WearItemRes. */
    class WearItemRes implements IWearItemRes {

        /**
         * Constructs a new WearItemRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IWearItemRes);

        /** WearItemRes code. */
        public code: number;

        /** WearItemRes msg. */
        public msg: string;

        /**
         * Creates a new WearItemRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WearItemRes instance
         */
        public static create(properties?: game.IWearItemRes): game.WearItemRes;

        /**
         * Encodes the specified WearItemRes message. Does not implicitly {@link game.WearItemRes.verify|verify} messages.
         * @param message WearItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IWearItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified WearItemRes message, length delimited. Does not implicitly {@link game.WearItemRes.verify|verify} messages.
         * @param message WearItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IWearItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a WearItemRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WearItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.WearItemRes;

        /**
         * Decodes a WearItemRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WearItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.WearItemRes;

        /**
         * Verifies a WearItemRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WearItemRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WearItemRes
         */
        public static fromObject(object: { [k: string]: any }): game.WearItemRes;

        /**
         * Creates a plain object from a WearItemRes message. Also converts values to other types if specified.
         * @param message WearItemRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.WearItemRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WearItemRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WearItemRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TakeOffItemReq. */
    interface ITakeOffItemReq {

        /** TakeOffItemReq itemId */
        itemId: number;

        /** TakeOffItemReq partIndex */
        partIndex: number;
    }

    /** Represents a TakeOffItemReq. */
    class TakeOffItemReq implements ITakeOffItemReq {

        /**
         * Constructs a new TakeOffItemReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ITakeOffItemReq);

        /** TakeOffItemReq itemId. */
        public itemId: number;

        /** TakeOffItemReq partIndex. */
        public partIndex: number;

        /**
         * Creates a new TakeOffItemReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TakeOffItemReq instance
         */
        public static create(properties?: game.ITakeOffItemReq): game.TakeOffItemReq;

        /**
         * Encodes the specified TakeOffItemReq message. Does not implicitly {@link game.TakeOffItemReq.verify|verify} messages.
         * @param message TakeOffItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ITakeOffItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TakeOffItemReq message, length delimited. Does not implicitly {@link game.TakeOffItemReq.verify|verify} messages.
         * @param message TakeOffItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ITakeOffItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TakeOffItemReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TakeOffItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.TakeOffItemReq;

        /**
         * Decodes a TakeOffItemReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TakeOffItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.TakeOffItemReq;

        /**
         * Verifies a TakeOffItemReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TakeOffItemReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TakeOffItemReq
         */
        public static fromObject(object: { [k: string]: any }): game.TakeOffItemReq;

        /**
         * Creates a plain object from a TakeOffItemReq message. Also converts values to other types if specified.
         * @param message TakeOffItemReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.TakeOffItemReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TakeOffItemReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TakeOffItemReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TakeOffItemRes. */
    interface ITakeOffItemRes {

        /** TakeOffItemRes code */
        code: number;

        /** TakeOffItemRes msg */
        msg?: (string|null);
    }

    /** Represents a TakeOffItemRes. */
    class TakeOffItemRes implements ITakeOffItemRes {

        /**
         * Constructs a new TakeOffItemRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ITakeOffItemRes);

        /** TakeOffItemRes code. */
        public code: number;

        /** TakeOffItemRes msg. */
        public msg: string;

        /**
         * Creates a new TakeOffItemRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TakeOffItemRes instance
         */
        public static create(properties?: game.ITakeOffItemRes): game.TakeOffItemRes;

        /**
         * Encodes the specified TakeOffItemRes message. Does not implicitly {@link game.TakeOffItemRes.verify|verify} messages.
         * @param message TakeOffItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ITakeOffItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TakeOffItemRes message, length delimited. Does not implicitly {@link game.TakeOffItemRes.verify|verify} messages.
         * @param message TakeOffItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ITakeOffItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TakeOffItemRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TakeOffItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.TakeOffItemRes;

        /**
         * Decodes a TakeOffItemRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TakeOffItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.TakeOffItemRes;

        /**
         * Verifies a TakeOffItemRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TakeOffItemRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TakeOffItemRes
         */
        public static fromObject(object: { [k: string]: any }): game.TakeOffItemRes;

        /**
         * Creates a plain object from a TakeOffItemRes message. Also converts values to other types if specified.
         * @param message TakeOffItemRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.TakeOffItemRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TakeOffItemRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TakeOffItemRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RecycleItemReq. */
    interface IRecycleItemReq {

        /** RecycleItemReq itemIds */
        itemIds?: (number[]|null);
    }

    /** Represents a RecycleItemReq. */
    class RecycleItemReq implements IRecycleItemReq {

        /**
         * Constructs a new RecycleItemReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IRecycleItemReq);

        /** RecycleItemReq itemIds. */
        public itemIds: number[];

        /**
         * Creates a new RecycleItemReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecycleItemReq instance
         */
        public static create(properties?: game.IRecycleItemReq): game.RecycleItemReq;

        /**
         * Encodes the specified RecycleItemReq message. Does not implicitly {@link game.RecycleItemReq.verify|verify} messages.
         * @param message RecycleItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IRecycleItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RecycleItemReq message, length delimited. Does not implicitly {@link game.RecycleItemReq.verify|verify} messages.
         * @param message RecycleItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IRecycleItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RecycleItemReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecycleItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.RecycleItemReq;

        /**
         * Decodes a RecycleItemReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecycleItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.RecycleItemReq;

        /**
         * Verifies a RecycleItemReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecycleItemReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecycleItemReq
         */
        public static fromObject(object: { [k: string]: any }): game.RecycleItemReq;

        /**
         * Creates a plain object from a RecycleItemReq message. Also converts values to other types if specified.
         * @param message RecycleItemReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.RecycleItemReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecycleItemReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RecycleItemReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RecycleItemRes. */
    interface IRecycleItemRes {

        /** RecycleItemRes code */
        code: number;

        /** RecycleItemRes msg */
        msg?: (string|null);

        /** RecycleItemRes gold */
        gold?: (number|null);
    }

    /** Represents a RecycleItemRes. */
    class RecycleItemRes implements IRecycleItemRes {

        /**
         * Constructs a new RecycleItemRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IRecycleItemRes);

        /** RecycleItemRes code. */
        public code: number;

        /** RecycleItemRes msg. */
        public msg: string;

        /** RecycleItemRes gold. */
        public gold: number;

        /**
         * Creates a new RecycleItemRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecycleItemRes instance
         */
        public static create(properties?: game.IRecycleItemRes): game.RecycleItemRes;

        /**
         * Encodes the specified RecycleItemRes message. Does not implicitly {@link game.RecycleItemRes.verify|verify} messages.
         * @param message RecycleItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IRecycleItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RecycleItemRes message, length delimited. Does not implicitly {@link game.RecycleItemRes.verify|verify} messages.
         * @param message RecycleItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IRecycleItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RecycleItemRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecycleItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.RecycleItemRes;

        /**
         * Decodes a RecycleItemRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecycleItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.RecycleItemRes;

        /**
         * Verifies a RecycleItemRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecycleItemRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecycleItemRes
         */
        public static fromObject(object: { [k: string]: any }): game.RecycleItemRes;

        /**
         * Creates a plain object from a RecycleItemRes message. Also converts values to other types if specified.
         * @param message RecycleItemRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.RecycleItemRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecycleItemRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RecycleItemRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LockItemReq. */
    interface ILockItemReq {

        /** LockItemReq itemId */
        itemId: number;

        /** LockItemReq lock */
        lock: boolean;
    }

    /** Represents a LockItemReq. */
    class LockItemReq implements ILockItemReq {

        /**
         * Constructs a new LockItemReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ILockItemReq);

        /** LockItemReq itemId. */
        public itemId: number;

        /** LockItemReq lock. */
        public lock: boolean;

        /**
         * Creates a new LockItemReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LockItemReq instance
         */
        public static create(properties?: game.ILockItemReq): game.LockItemReq;

        /**
         * Encodes the specified LockItemReq message. Does not implicitly {@link game.LockItemReq.verify|verify} messages.
         * @param message LockItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ILockItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LockItemReq message, length delimited. Does not implicitly {@link game.LockItemReq.verify|verify} messages.
         * @param message LockItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ILockItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LockItemReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LockItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.LockItemReq;

        /**
         * Decodes a LockItemReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LockItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.LockItemReq;

        /**
         * Verifies a LockItemReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LockItemReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LockItemReq
         */
        public static fromObject(object: { [k: string]: any }): game.LockItemReq;

        /**
         * Creates a plain object from a LockItemReq message. Also converts values to other types if specified.
         * @param message LockItemReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.LockItemReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LockItemReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LockItemReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LockItemRes. */
    interface ILockItemRes {

        /** LockItemRes code */
        code: number;

        /** LockItemRes msg */
        msg?: (string|null);
    }

    /** Represents a LockItemRes. */
    class LockItemRes implements ILockItemRes {

        /**
         * Constructs a new LockItemRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ILockItemRes);

        /** LockItemRes code. */
        public code: number;

        /** LockItemRes msg. */
        public msg: string;

        /**
         * Creates a new LockItemRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LockItemRes instance
         */
        public static create(properties?: game.ILockItemRes): game.LockItemRes;

        /**
         * Encodes the specified LockItemRes message. Does not implicitly {@link game.LockItemRes.verify|verify} messages.
         * @param message LockItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ILockItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LockItemRes message, length delimited. Does not implicitly {@link game.LockItemRes.verify|verify} messages.
         * @param message LockItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ILockItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LockItemRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LockItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.LockItemRes;

        /**
         * Decodes a LockItemRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LockItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.LockItemRes;

        /**
         * Verifies a LockItemRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LockItemRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LockItemRes
         */
        public static fromObject(object: { [k: string]: any }): game.LockItemRes;

        /**
         * Creates a plain object from a LockItemRes message. Also converts values to other types if specified.
         * @param message LockItemRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.LockItemRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LockItemRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LockItemRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WashItemReq. */
    interface IWashItemReq {

        /** WashItemReq itemId */
        itemId: number;

        /** WashItemReq save */
        save: boolean;
    }

    /** Represents a WashItemReq. */
    class WashItemReq implements IWashItemReq {

        /**
         * Constructs a new WashItemReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IWashItemReq);

        /** WashItemReq itemId. */
        public itemId: number;

        /** WashItemReq save. */
        public save: boolean;

        /**
         * Creates a new WashItemReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WashItemReq instance
         */
        public static create(properties?: game.IWashItemReq): game.WashItemReq;

        /**
         * Encodes the specified WashItemReq message. Does not implicitly {@link game.WashItemReq.verify|verify} messages.
         * @param message WashItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IWashItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified WashItemReq message, length delimited. Does not implicitly {@link game.WashItemReq.verify|verify} messages.
         * @param message WashItemReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IWashItemReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a WashItemReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WashItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.WashItemReq;

        /**
         * Decodes a WashItemReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WashItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.WashItemReq;

        /**
         * Verifies a WashItemReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WashItemReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WashItemReq
         */
        public static fromObject(object: { [k: string]: any }): game.WashItemReq;

        /**
         * Creates a plain object from a WashItemReq message. Also converts values to other types if specified.
         * @param message WashItemReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.WashItemReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WashItemReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WashItemReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WashItemRes. */
    interface IWashItemRes {

        /** WashItemRes code */
        code: number;

        /** WashItemRes msg */
        msg?: (string|null);

        /** WashItemRes attr */
        attr?: (string|null);

        /** WashItemRes quality */
        quality?: (number|null);

        /** WashItemRes save */
        save?: (boolean|null);
    }

    /** Represents a WashItemRes. */
    class WashItemRes implements IWashItemRes {

        /**
         * Constructs a new WashItemRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IWashItemRes);

        /** WashItemRes code. */
        public code: number;

        /** WashItemRes msg. */
        public msg: string;

        /** WashItemRes attr. */
        public attr: string;

        /** WashItemRes quality. */
        public quality: number;

        /** WashItemRes save. */
        public save: boolean;

        /**
         * Creates a new WashItemRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WashItemRes instance
         */
        public static create(properties?: game.IWashItemRes): game.WashItemRes;

        /**
         * Encodes the specified WashItemRes message. Does not implicitly {@link game.WashItemRes.verify|verify} messages.
         * @param message WashItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IWashItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified WashItemRes message, length delimited. Does not implicitly {@link game.WashItemRes.verify|verify} messages.
         * @param message WashItemRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IWashItemRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a WashItemRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WashItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.WashItemRes;

        /**
         * Decodes a WashItemRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WashItemRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.WashItemRes;

        /**
         * Verifies a WashItemRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WashItemRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WashItemRes
         */
        public static fromObject(object: { [k: string]: any }): game.WashItemRes;

        /**
         * Creates a plain object from a WashItemRes message. Also converts values to other types if specified.
         * @param message WashItemRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.WashItemRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WashItemRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WashItemRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Player. */
    interface IPlayer {

        /** Player id */
        id: number;

        /** Player name */
        name: string;

        /** Player bagMax */
        bagMax?: (number|null);

        /** Player gold */
        gold?: (number|Long|null);

        /** Player yuanbao */
        yuanbao?: (number|Long|null);

        /** Player job */
        job: number;

        /** Player rebirth */
        rebirth: number;

        /** Player exp */
        exp: number;

        /** Player level */
        level: number;

        /** Player lastLoginTime */
        lastLoginTime?: (number|Long|null);

        /** Player loginDays */
        loginDays?: (number|null);

        /** Player lastSignTime */
        lastSignTime?: (number|Long|null);

        /** Player signProgress */
        signProgress?: (number|null);

        /** Player growthState1 */
        growthState1?: (number|null);

        /** Player growthState2 */
        growthState2?: (number|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPlayer);

        /** Player id. */
        public id: number;

        /** Player name. */
        public name: string;

        /** Player bagMax. */
        public bagMax: number;

        /** Player gold. */
        public gold: (number|Long);

        /** Player yuanbao. */
        public yuanbao: (number|Long);

        /** Player job. */
        public job: number;

        /** Player rebirth. */
        public rebirth: number;

        /** Player exp. */
        public exp: number;

        /** Player level. */
        public level: number;

        /** Player lastLoginTime. */
        public lastLoginTime: (number|Long);

        /** Player loginDays. */
        public loginDays: number;

        /** Player lastSignTime. */
        public lastSignTime: (number|Long);

        /** Player signProgress. */
        public signProgress: number;

        /** Player growthState1. */
        public growthState1: number;

        /** Player growthState2. */
        public growthState2: number;

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: game.IPlayer): game.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link game.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link game.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.Player;

        /**
         * Verifies a Player message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Player
         */
        public static fromObject(object: { [k: string]: any }): game.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Player, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Player to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Player
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Skill. */
    interface ISkill {

        /** Skill id */
        id: number;

        /** Skill cfgId */
        cfgId: number;

        /** Skill level */
        level: number;

        /** Skill exp */
        exp: number;
    }

    /** Represents a Skill. */
    class Skill implements ISkill {

        /**
         * Constructs a new Skill.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ISkill);

        /** Skill id. */
        public id: number;

        /** Skill cfgId. */
        public cfgId: number;

        /** Skill level. */
        public level: number;

        /** Skill exp. */
        public exp: number;

        /**
         * Creates a new Skill instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Skill instance
         */
        public static create(properties?: game.ISkill): game.Skill;

        /**
         * Encodes the specified Skill message. Does not implicitly {@link game.Skill.verify|verify} messages.
         * @param message Skill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ISkill, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Skill message, length delimited. Does not implicitly {@link game.Skill.verify|verify} messages.
         * @param message Skill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ISkill, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Skill message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.Skill;

        /**
         * Decodes a Skill message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.Skill;

        /**
         * Verifies a Skill message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Skill message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Skill
         */
        public static fromObject(object: { [k: string]: any }): game.Skill;

        /**
         * Creates a plain object from a Skill message. Also converts values to other types if specified.
         * @param message Skill
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Skill, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Skill to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Skill
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SkillInfoReq. */
    interface ISkillInfoReq {
    }

    /** Represents a SkillInfoReq. */
    class SkillInfoReq implements ISkillInfoReq {

        /**
         * Constructs a new SkillInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ISkillInfoReq);

        /**
         * Creates a new SkillInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SkillInfoReq instance
         */
        public static create(properties?: game.ISkillInfoReq): game.SkillInfoReq;

        /**
         * Encodes the specified SkillInfoReq message. Does not implicitly {@link game.SkillInfoReq.verify|verify} messages.
         * @param message SkillInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ISkillInfoReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SkillInfoReq message, length delimited. Does not implicitly {@link game.SkillInfoReq.verify|verify} messages.
         * @param message SkillInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ISkillInfoReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SkillInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SkillInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.SkillInfoReq;

        /**
         * Decodes a SkillInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SkillInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.SkillInfoReq;

        /**
         * Verifies a SkillInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SkillInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SkillInfoReq
         */
        public static fromObject(object: { [k: string]: any }): game.SkillInfoReq;

        /**
         * Creates a plain object from a SkillInfoReq message. Also converts values to other types if specified.
         * @param message SkillInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.SkillInfoReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SkillInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SkillInfoReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SkillInfoRes. */
    interface ISkillInfoRes {

        /** SkillInfoRes code */
        code: number;

        /** SkillInfoRes msg */
        msg?: (string|null);

        /** SkillInfoRes skillList */
        skillList?: (game.ISkill[]|null);
    }

    /** Represents a SkillInfoRes. */
    class SkillInfoRes implements ISkillInfoRes {

        /**
         * Constructs a new SkillInfoRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ISkillInfoRes);

        /** SkillInfoRes code. */
        public code: number;

        /** SkillInfoRes msg. */
        public msg: string;

        /** SkillInfoRes skillList. */
        public skillList: game.ISkill[];

        /**
         * Creates a new SkillInfoRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SkillInfoRes instance
         */
        public static create(properties?: game.ISkillInfoRes): game.SkillInfoRes;

        /**
         * Encodes the specified SkillInfoRes message. Does not implicitly {@link game.SkillInfoRes.verify|verify} messages.
         * @param message SkillInfoRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ISkillInfoRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SkillInfoRes message, length delimited. Does not implicitly {@link game.SkillInfoRes.verify|verify} messages.
         * @param message SkillInfoRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ISkillInfoRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SkillInfoRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SkillInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.SkillInfoRes;

        /**
         * Decodes a SkillInfoRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SkillInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.SkillInfoRes;

        /**
         * Verifies a SkillInfoRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SkillInfoRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SkillInfoRes
         */
        public static fromObject(object: { [k: string]: any }): game.SkillInfoRes;

        /**
         * Creates a plain object from a SkillInfoRes message. Also converts values to other types if specified.
         * @param message SkillInfoRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.SkillInfoRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SkillInfoRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SkillInfoRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateSkillReq. */
    interface IUpdateSkillReq {

        /** UpdateSkillReq skillId */
        skillId: number;
    }

    /** Represents an UpdateSkillReq. */
    class UpdateSkillReq implements IUpdateSkillReq {

        /**
         * Constructs a new UpdateSkillReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IUpdateSkillReq);

        /** UpdateSkillReq skillId. */
        public skillId: number;

        /**
         * Creates a new UpdateSkillReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateSkillReq instance
         */
        public static create(properties?: game.IUpdateSkillReq): game.UpdateSkillReq;

        /**
         * Encodes the specified UpdateSkillReq message. Does not implicitly {@link game.UpdateSkillReq.verify|verify} messages.
         * @param message UpdateSkillReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IUpdateSkillReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UpdateSkillReq message, length delimited. Does not implicitly {@link game.UpdateSkillReq.verify|verify} messages.
         * @param message UpdateSkillReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IUpdateSkillReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an UpdateSkillReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateSkillReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.UpdateSkillReq;

        /**
         * Decodes an UpdateSkillReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateSkillReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.UpdateSkillReq;

        /**
         * Verifies an UpdateSkillReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateSkillReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateSkillReq
         */
        public static fromObject(object: { [k: string]: any }): game.UpdateSkillReq;

        /**
         * Creates a plain object from an UpdateSkillReq message. Also converts values to other types if specified.
         * @param message UpdateSkillReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.UpdateSkillReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateSkillReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateSkillReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateSkillRes. */
    interface IUpdateSkillRes {

        /** UpdateSkillRes code */
        code: number;

        /** UpdateSkillRes msg */
        msg?: (string|null);
    }

    /** Represents an UpdateSkillRes. */
    class UpdateSkillRes implements IUpdateSkillRes {

        /**
         * Constructs a new UpdateSkillRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IUpdateSkillRes);

        /** UpdateSkillRes code. */
        public code: number;

        /** UpdateSkillRes msg. */
        public msg: string;

        /**
         * Creates a new UpdateSkillRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateSkillRes instance
         */
        public static create(properties?: game.IUpdateSkillRes): game.UpdateSkillRes;

        /**
         * Encodes the specified UpdateSkillRes message. Does not implicitly {@link game.UpdateSkillRes.verify|verify} messages.
         * @param message UpdateSkillRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IUpdateSkillRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UpdateSkillRes message, length delimited. Does not implicitly {@link game.UpdateSkillRes.verify|verify} messages.
         * @param message UpdateSkillRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IUpdateSkillRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an UpdateSkillRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateSkillRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.UpdateSkillRes;

        /**
         * Decodes an UpdateSkillRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateSkillRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.UpdateSkillRes;

        /**
         * Verifies an UpdateSkillRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateSkillRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateSkillRes
         */
        public static fromObject(object: { [k: string]: any }): game.UpdateSkillRes;

        /**
         * Creates a plain object from an UpdateSkillRes message. Also converts values to other types if specified.
         * @param message UpdateSkillRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.UpdateSkillRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateSkillRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateSkillRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Task. */
    interface ITask {

        /** Task id */
        id: number;

        /** Task type */
        type: number;

        /** Task cfgId */
        cfgId: number;
    }

    /** Represents a Task. */
    class Task implements ITask {

        /**
         * Constructs a new Task.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ITask);

        /** Task id. */
        public id: number;

        /** Task type. */
        public type: number;

        /** Task cfgId. */
        public cfgId: number;

        /**
         * Creates a new Task instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Task instance
         */
        public static create(properties?: game.ITask): game.Task;

        /**
         * Encodes the specified Task message. Does not implicitly {@link game.Task.verify|verify} messages.
         * @param message Task message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ITask, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Task message, length delimited. Does not implicitly {@link game.Task.verify|verify} messages.
         * @param message Task message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ITask, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Task message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.Task;

        /**
         * Decodes a Task message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.Task;

        /**
         * Verifies a Task message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Task message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Task
         */
        public static fromObject(object: { [k: string]: any }): game.Task;

        /**
         * Creates a plain object from a Task message. Also converts values to other types if specified.
         * @param message Task
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Task, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Task to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Task
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TaskReceiveReq. */
    interface ITaskReceiveReq {

        /** TaskReceiveReq type */
        type: number;

        /** TaskReceiveReq cfgId */
        cfgId: number;
    }

    /** Represents a TaskReceiveReq. */
    class TaskReceiveReq implements ITaskReceiveReq {

        /**
         * Constructs a new TaskReceiveReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ITaskReceiveReq);

        /** TaskReceiveReq type. */
        public type: number;

        /** TaskReceiveReq cfgId. */
        public cfgId: number;

        /**
         * Creates a new TaskReceiveReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskReceiveReq instance
         */
        public static create(properties?: game.ITaskReceiveReq): game.TaskReceiveReq;

        /**
         * Encodes the specified TaskReceiveReq message. Does not implicitly {@link game.TaskReceiveReq.verify|verify} messages.
         * @param message TaskReceiveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ITaskReceiveReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TaskReceiveReq message, length delimited. Does not implicitly {@link game.TaskReceiveReq.verify|verify} messages.
         * @param message TaskReceiveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ITaskReceiveReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TaskReceiveReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskReceiveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.TaskReceiveReq;

        /**
         * Decodes a TaskReceiveReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskReceiveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.TaskReceiveReq;

        /**
         * Verifies a TaskReceiveReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskReceiveReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskReceiveReq
         */
        public static fromObject(object: { [k: string]: any }): game.TaskReceiveReq;

        /**
         * Creates a plain object from a TaskReceiveReq message. Also converts values to other types if specified.
         * @param message TaskReceiveReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.TaskReceiveReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskReceiveReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TaskReceiveReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TaskReceiveRes. */
    interface ITaskReceiveRes {

        /** TaskReceiveRes code */
        code: number;

        /** TaskReceiveRes msg */
        msg?: (string|null);

        /** TaskReceiveRes reward */
        reward?: (game.IRewardCost|null);
    }

    /** Represents a TaskReceiveRes. */
    class TaskReceiveRes implements ITaskReceiveRes {

        /**
         * Constructs a new TaskReceiveRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ITaskReceiveRes);

        /** TaskReceiveRes code. */
        public code: number;

        /** TaskReceiveRes msg. */
        public msg: string;

        /** TaskReceiveRes reward. */
        public reward?: (game.IRewardCost|null);

        /**
         * Creates a new TaskReceiveRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskReceiveRes instance
         */
        public static create(properties?: game.ITaskReceiveRes): game.TaskReceiveRes;

        /**
         * Encodes the specified TaskReceiveRes message. Does not implicitly {@link game.TaskReceiveRes.verify|verify} messages.
         * @param message TaskReceiveRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ITaskReceiveRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TaskReceiveRes message, length delimited. Does not implicitly {@link game.TaskReceiveRes.verify|verify} messages.
         * @param message TaskReceiveRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ITaskReceiveRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TaskReceiveRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskReceiveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.TaskReceiveRes;

        /**
         * Decodes a TaskReceiveRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskReceiveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.TaskReceiveRes;

        /**
         * Verifies a TaskReceiveRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskReceiveRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskReceiveRes
         */
        public static fromObject(object: { [k: string]: any }): game.TaskReceiveRes;

        /**
         * Creates a plain object from a TaskReceiveRes message. Also converts values to other types if specified.
         * @param message TaskReceiveRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.TaskReceiveRes, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskReceiveRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TaskReceiveRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
