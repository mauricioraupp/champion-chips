
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SoccerLeague
 * 
 */
export type SoccerLeague = $Result.DefaultSelection<Prisma.$SoccerLeaguePayload>
/**
 * Model TeamsSoccerLeague
 * 
 */
export type TeamsSoccerLeague = $Result.DefaultSelection<Prisma.$TeamsSoccerLeaguePayload>
/**
 * Model Players
 * 
 */
export type Players = $Result.DefaultSelection<Prisma.$PlayersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.soccerLeague`: Exposes CRUD operations for the **SoccerLeague** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SoccerLeagues
    * const soccerLeagues = await prisma.soccerLeague.findMany()
    * ```
    */
  get soccerLeague(): Prisma.SoccerLeagueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamsSoccerLeague`: Exposes CRUD operations for the **TeamsSoccerLeague** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamsSoccerLeagues
    * const teamsSoccerLeagues = await prisma.teamsSoccerLeague.findMany()
    * ```
    */
  get teamsSoccerLeague(): Prisma.TeamsSoccerLeagueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.players`: Exposes CRUD operations for the **Players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.players.findMany()
    * ```
    */
  get players(): Prisma.PlayersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SoccerLeague: 'SoccerLeague',
    TeamsSoccerLeague: 'TeamsSoccerLeague',
    Players: 'Players'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "soccerLeague" | "teamsSoccerLeague" | "players"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SoccerLeague: {
        payload: Prisma.$SoccerLeaguePayload<ExtArgs>
        fields: Prisma.SoccerLeagueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SoccerLeagueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoccerLeaguePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SoccerLeagueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoccerLeaguePayload>
          }
          findFirst: {
            args: Prisma.SoccerLeagueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoccerLeaguePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SoccerLeagueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoccerLeaguePayload>
          }
          findMany: {
            args: Prisma.SoccerLeagueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoccerLeaguePayload>[]
          }
          create: {
            args: Prisma.SoccerLeagueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoccerLeaguePayload>
          }
          createMany: {
            args: Prisma.SoccerLeagueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SoccerLeagueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoccerLeaguePayload>[]
          }
          delete: {
            args: Prisma.SoccerLeagueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoccerLeaguePayload>
          }
          update: {
            args: Prisma.SoccerLeagueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoccerLeaguePayload>
          }
          deleteMany: {
            args: Prisma.SoccerLeagueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SoccerLeagueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SoccerLeagueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoccerLeaguePayload>[]
          }
          upsert: {
            args: Prisma.SoccerLeagueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoccerLeaguePayload>
          }
          aggregate: {
            args: Prisma.SoccerLeagueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSoccerLeague>
          }
          groupBy: {
            args: Prisma.SoccerLeagueGroupByArgs<ExtArgs>
            result: $Utils.Optional<SoccerLeagueGroupByOutputType>[]
          }
          count: {
            args: Prisma.SoccerLeagueCountArgs<ExtArgs>
            result: $Utils.Optional<SoccerLeagueCountAggregateOutputType> | number
          }
        }
      }
      TeamsSoccerLeague: {
        payload: Prisma.$TeamsSoccerLeaguePayload<ExtArgs>
        fields: Prisma.TeamsSoccerLeagueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamsSoccerLeagueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsSoccerLeaguePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamsSoccerLeagueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsSoccerLeaguePayload>
          }
          findFirst: {
            args: Prisma.TeamsSoccerLeagueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsSoccerLeaguePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamsSoccerLeagueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsSoccerLeaguePayload>
          }
          findMany: {
            args: Prisma.TeamsSoccerLeagueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsSoccerLeaguePayload>[]
          }
          create: {
            args: Prisma.TeamsSoccerLeagueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsSoccerLeaguePayload>
          }
          createMany: {
            args: Prisma.TeamsSoccerLeagueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamsSoccerLeagueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsSoccerLeaguePayload>[]
          }
          delete: {
            args: Prisma.TeamsSoccerLeagueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsSoccerLeaguePayload>
          }
          update: {
            args: Prisma.TeamsSoccerLeagueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsSoccerLeaguePayload>
          }
          deleteMany: {
            args: Prisma.TeamsSoccerLeagueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamsSoccerLeagueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamsSoccerLeagueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsSoccerLeaguePayload>[]
          }
          upsert: {
            args: Prisma.TeamsSoccerLeagueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsSoccerLeaguePayload>
          }
          aggregate: {
            args: Prisma.TeamsSoccerLeagueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamsSoccerLeague>
          }
          groupBy: {
            args: Prisma.TeamsSoccerLeagueGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamsSoccerLeagueGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamsSoccerLeagueCountArgs<ExtArgs>
            result: $Utils.Optional<TeamsSoccerLeagueCountAggregateOutputType> | number
          }
        }
      }
      Players: {
        payload: Prisma.$PlayersPayload<ExtArgs>
        fields: Prisma.PlayersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          findFirst: {
            args: Prisma.PlayersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          findMany: {
            args: Prisma.PlayersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          create: {
            args: Prisma.PlayersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          createMany: {
            args: Prisma.PlayersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          delete: {
            args: Prisma.PlayersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          update: {
            args: Prisma.PlayersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          deleteMany: {
            args: Prisma.PlayersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          upsert: {
            args: Prisma.PlayersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          aggregate: {
            args: Prisma.PlayersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayers>
          }
          groupBy: {
            args: Prisma.PlayersGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayersGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayersCountArgs<ExtArgs>
            result: $Utils.Optional<PlayersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    soccerLeague?: SoccerLeagueOmit
    teamsSoccerLeague?: TeamsSoccerLeagueOmit
    players?: PlayersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    soccerLeagues: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    soccerLeagues?: boolean | UserCountOutputTypeCountSoccerLeaguesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSoccerLeaguesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoccerLeagueWhereInput
  }


  /**
   * Count Type SoccerLeagueCountOutputType
   */

  export type SoccerLeagueCountOutputType = {
    Teams: number
  }

  export type SoccerLeagueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Teams?: boolean | SoccerLeagueCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * SoccerLeagueCountOutputType without action
   */
  export type SoccerLeagueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoccerLeagueCountOutputType
     */
    select?: SoccerLeagueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SoccerLeagueCountOutputType without action
   */
  export type SoccerLeagueCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsSoccerLeagueWhereInput
  }


  /**
   * Count Type TeamsSoccerLeagueCountOutputType
   */

  export type TeamsSoccerLeagueCountOutputType = {
    Players: number
  }

  export type TeamsSoccerLeagueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Players?: boolean | TeamsSoccerLeagueCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * TeamsSoccerLeagueCountOutputType without action
   */
  export type TeamsSoccerLeagueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsSoccerLeagueCountOutputType
     */
    select?: TeamsSoccerLeagueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamsSoccerLeagueCountOutputType without action
   */
  export type TeamsSoccerLeagueCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    soccerLeagues?: boolean | User$soccerLeaguesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    soccerLeagues?: boolean | User$soccerLeaguesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      soccerLeagues: Prisma.$SoccerLeaguePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    soccerLeagues<T extends User$soccerLeaguesArgs<ExtArgs> = {}>(args?: Subset<T, User$soccerLeaguesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoccerLeaguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.soccerLeagues
   */
  export type User$soccerLeaguesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoccerLeague
     */
    select?: SoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoccerLeague
     */
    omit?: SoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoccerLeagueInclude<ExtArgs> | null
    where?: SoccerLeagueWhereInput
    orderBy?: SoccerLeagueOrderByWithRelationInput | SoccerLeagueOrderByWithRelationInput[]
    cursor?: SoccerLeagueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SoccerLeagueScalarFieldEnum | SoccerLeagueScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SoccerLeague
   */

  export type AggregateSoccerLeague = {
    _count: SoccerLeagueCountAggregateOutputType | null
    _avg: SoccerLeagueAvgAggregateOutputType | null
    _sum: SoccerLeagueSumAggregateOutputType | null
    _min: SoccerLeagueMinAggregateOutputType | null
    _max: SoccerLeagueMaxAggregateOutputType | null
  }

  export type SoccerLeagueAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    stage: number | null
  }

  export type SoccerLeagueSumAggregateOutputType = {
    id: number | null
    userId: number | null
    stage: number | null
  }

  export type SoccerLeagueMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    stage: number | null
  }

  export type SoccerLeagueMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    stage: number | null
  }

  export type SoccerLeagueCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    stage: number
    _all: number
  }


  export type SoccerLeagueAvgAggregateInputType = {
    id?: true
    userId?: true
    stage?: true
  }

  export type SoccerLeagueSumAggregateInputType = {
    id?: true
    userId?: true
    stage?: true
  }

  export type SoccerLeagueMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    stage?: true
  }

  export type SoccerLeagueMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    stage?: true
  }

  export type SoccerLeagueCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    stage?: true
    _all?: true
  }

  export type SoccerLeagueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SoccerLeague to aggregate.
     */
    where?: SoccerLeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoccerLeagues to fetch.
     */
    orderBy?: SoccerLeagueOrderByWithRelationInput | SoccerLeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SoccerLeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoccerLeagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoccerLeagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SoccerLeagues
    **/
    _count?: true | SoccerLeagueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SoccerLeagueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SoccerLeagueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoccerLeagueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoccerLeagueMaxAggregateInputType
  }

  export type GetSoccerLeagueAggregateType<T extends SoccerLeagueAggregateArgs> = {
        [P in keyof T & keyof AggregateSoccerLeague]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSoccerLeague[P]>
      : GetScalarType<T[P], AggregateSoccerLeague[P]>
  }




  export type SoccerLeagueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoccerLeagueWhereInput
    orderBy?: SoccerLeagueOrderByWithAggregationInput | SoccerLeagueOrderByWithAggregationInput[]
    by: SoccerLeagueScalarFieldEnum[] | SoccerLeagueScalarFieldEnum
    having?: SoccerLeagueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoccerLeagueCountAggregateInputType | true
    _avg?: SoccerLeagueAvgAggregateInputType
    _sum?: SoccerLeagueSumAggregateInputType
    _min?: SoccerLeagueMinAggregateInputType
    _max?: SoccerLeagueMaxAggregateInputType
  }

  export type SoccerLeagueGroupByOutputType = {
    id: number
    userId: number | null
    name: string
    stage: number
    _count: SoccerLeagueCountAggregateOutputType | null
    _avg: SoccerLeagueAvgAggregateOutputType | null
    _sum: SoccerLeagueSumAggregateOutputType | null
    _min: SoccerLeagueMinAggregateOutputType | null
    _max: SoccerLeagueMaxAggregateOutputType | null
  }

  type GetSoccerLeagueGroupByPayload<T extends SoccerLeagueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoccerLeagueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoccerLeagueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoccerLeagueGroupByOutputType[P]>
            : GetScalarType<T[P], SoccerLeagueGroupByOutputType[P]>
        }
      >
    >


  export type SoccerLeagueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    stage?: boolean
    User?: boolean | SoccerLeague$UserArgs<ExtArgs>
    Teams?: boolean | SoccerLeague$TeamsArgs<ExtArgs>
    _count?: boolean | SoccerLeagueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["soccerLeague"]>

  export type SoccerLeagueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    stage?: boolean
    User?: boolean | SoccerLeague$UserArgs<ExtArgs>
  }, ExtArgs["result"]["soccerLeague"]>

  export type SoccerLeagueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    stage?: boolean
    User?: boolean | SoccerLeague$UserArgs<ExtArgs>
  }, ExtArgs["result"]["soccerLeague"]>

  export type SoccerLeagueSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    stage?: boolean
  }

  export type SoccerLeagueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "stage", ExtArgs["result"]["soccerLeague"]>
  export type SoccerLeagueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | SoccerLeague$UserArgs<ExtArgs>
    Teams?: boolean | SoccerLeague$TeamsArgs<ExtArgs>
    _count?: boolean | SoccerLeagueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SoccerLeagueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | SoccerLeague$UserArgs<ExtArgs>
  }
  export type SoccerLeagueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | SoccerLeague$UserArgs<ExtArgs>
  }

  export type $SoccerLeaguePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SoccerLeague"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      Teams: Prisma.$TeamsSoccerLeaguePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      name: string
      stage: number
    }, ExtArgs["result"]["soccerLeague"]>
    composites: {}
  }

  type SoccerLeagueGetPayload<S extends boolean | null | undefined | SoccerLeagueDefaultArgs> = $Result.GetResult<Prisma.$SoccerLeaguePayload, S>

  type SoccerLeagueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SoccerLeagueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SoccerLeagueCountAggregateInputType | true
    }

  export interface SoccerLeagueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SoccerLeague'], meta: { name: 'SoccerLeague' } }
    /**
     * Find zero or one SoccerLeague that matches the filter.
     * @param {SoccerLeagueFindUniqueArgs} args - Arguments to find a SoccerLeague
     * @example
     * // Get one SoccerLeague
     * const soccerLeague = await prisma.soccerLeague.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SoccerLeagueFindUniqueArgs>(args: SelectSubset<T, SoccerLeagueFindUniqueArgs<ExtArgs>>): Prisma__SoccerLeagueClient<$Result.GetResult<Prisma.$SoccerLeaguePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SoccerLeague that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SoccerLeagueFindUniqueOrThrowArgs} args - Arguments to find a SoccerLeague
     * @example
     * // Get one SoccerLeague
     * const soccerLeague = await prisma.soccerLeague.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SoccerLeagueFindUniqueOrThrowArgs>(args: SelectSubset<T, SoccerLeagueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SoccerLeagueClient<$Result.GetResult<Prisma.$SoccerLeaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SoccerLeague that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoccerLeagueFindFirstArgs} args - Arguments to find a SoccerLeague
     * @example
     * // Get one SoccerLeague
     * const soccerLeague = await prisma.soccerLeague.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SoccerLeagueFindFirstArgs>(args?: SelectSubset<T, SoccerLeagueFindFirstArgs<ExtArgs>>): Prisma__SoccerLeagueClient<$Result.GetResult<Prisma.$SoccerLeaguePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SoccerLeague that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoccerLeagueFindFirstOrThrowArgs} args - Arguments to find a SoccerLeague
     * @example
     * // Get one SoccerLeague
     * const soccerLeague = await prisma.soccerLeague.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SoccerLeagueFindFirstOrThrowArgs>(args?: SelectSubset<T, SoccerLeagueFindFirstOrThrowArgs<ExtArgs>>): Prisma__SoccerLeagueClient<$Result.GetResult<Prisma.$SoccerLeaguePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SoccerLeagues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoccerLeagueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SoccerLeagues
     * const soccerLeagues = await prisma.soccerLeague.findMany()
     * 
     * // Get first 10 SoccerLeagues
     * const soccerLeagues = await prisma.soccerLeague.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const soccerLeagueWithIdOnly = await prisma.soccerLeague.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SoccerLeagueFindManyArgs>(args?: SelectSubset<T, SoccerLeagueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoccerLeaguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SoccerLeague.
     * @param {SoccerLeagueCreateArgs} args - Arguments to create a SoccerLeague.
     * @example
     * // Create one SoccerLeague
     * const SoccerLeague = await prisma.soccerLeague.create({
     *   data: {
     *     // ... data to create a SoccerLeague
     *   }
     * })
     * 
     */
    create<T extends SoccerLeagueCreateArgs>(args: SelectSubset<T, SoccerLeagueCreateArgs<ExtArgs>>): Prisma__SoccerLeagueClient<$Result.GetResult<Prisma.$SoccerLeaguePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SoccerLeagues.
     * @param {SoccerLeagueCreateManyArgs} args - Arguments to create many SoccerLeagues.
     * @example
     * // Create many SoccerLeagues
     * const soccerLeague = await prisma.soccerLeague.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SoccerLeagueCreateManyArgs>(args?: SelectSubset<T, SoccerLeagueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SoccerLeagues and returns the data saved in the database.
     * @param {SoccerLeagueCreateManyAndReturnArgs} args - Arguments to create many SoccerLeagues.
     * @example
     * // Create many SoccerLeagues
     * const soccerLeague = await prisma.soccerLeague.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SoccerLeagues and only return the `id`
     * const soccerLeagueWithIdOnly = await prisma.soccerLeague.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SoccerLeagueCreateManyAndReturnArgs>(args?: SelectSubset<T, SoccerLeagueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoccerLeaguePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SoccerLeague.
     * @param {SoccerLeagueDeleteArgs} args - Arguments to delete one SoccerLeague.
     * @example
     * // Delete one SoccerLeague
     * const SoccerLeague = await prisma.soccerLeague.delete({
     *   where: {
     *     // ... filter to delete one SoccerLeague
     *   }
     * })
     * 
     */
    delete<T extends SoccerLeagueDeleteArgs>(args: SelectSubset<T, SoccerLeagueDeleteArgs<ExtArgs>>): Prisma__SoccerLeagueClient<$Result.GetResult<Prisma.$SoccerLeaguePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SoccerLeague.
     * @param {SoccerLeagueUpdateArgs} args - Arguments to update one SoccerLeague.
     * @example
     * // Update one SoccerLeague
     * const soccerLeague = await prisma.soccerLeague.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SoccerLeagueUpdateArgs>(args: SelectSubset<T, SoccerLeagueUpdateArgs<ExtArgs>>): Prisma__SoccerLeagueClient<$Result.GetResult<Prisma.$SoccerLeaguePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SoccerLeagues.
     * @param {SoccerLeagueDeleteManyArgs} args - Arguments to filter SoccerLeagues to delete.
     * @example
     * // Delete a few SoccerLeagues
     * const { count } = await prisma.soccerLeague.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SoccerLeagueDeleteManyArgs>(args?: SelectSubset<T, SoccerLeagueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SoccerLeagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoccerLeagueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SoccerLeagues
     * const soccerLeague = await prisma.soccerLeague.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SoccerLeagueUpdateManyArgs>(args: SelectSubset<T, SoccerLeagueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SoccerLeagues and returns the data updated in the database.
     * @param {SoccerLeagueUpdateManyAndReturnArgs} args - Arguments to update many SoccerLeagues.
     * @example
     * // Update many SoccerLeagues
     * const soccerLeague = await prisma.soccerLeague.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SoccerLeagues and only return the `id`
     * const soccerLeagueWithIdOnly = await prisma.soccerLeague.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SoccerLeagueUpdateManyAndReturnArgs>(args: SelectSubset<T, SoccerLeagueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoccerLeaguePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SoccerLeague.
     * @param {SoccerLeagueUpsertArgs} args - Arguments to update or create a SoccerLeague.
     * @example
     * // Update or create a SoccerLeague
     * const soccerLeague = await prisma.soccerLeague.upsert({
     *   create: {
     *     // ... data to create a SoccerLeague
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SoccerLeague we want to update
     *   }
     * })
     */
    upsert<T extends SoccerLeagueUpsertArgs>(args: SelectSubset<T, SoccerLeagueUpsertArgs<ExtArgs>>): Prisma__SoccerLeagueClient<$Result.GetResult<Prisma.$SoccerLeaguePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SoccerLeagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoccerLeagueCountArgs} args - Arguments to filter SoccerLeagues to count.
     * @example
     * // Count the number of SoccerLeagues
     * const count = await prisma.soccerLeague.count({
     *   where: {
     *     // ... the filter for the SoccerLeagues we want to count
     *   }
     * })
    **/
    count<T extends SoccerLeagueCountArgs>(
      args?: Subset<T, SoccerLeagueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoccerLeagueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SoccerLeague.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoccerLeagueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SoccerLeagueAggregateArgs>(args: Subset<T, SoccerLeagueAggregateArgs>): Prisma.PrismaPromise<GetSoccerLeagueAggregateType<T>>

    /**
     * Group by SoccerLeague.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoccerLeagueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SoccerLeagueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SoccerLeagueGroupByArgs['orderBy'] }
        : { orderBy?: SoccerLeagueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SoccerLeagueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoccerLeagueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SoccerLeague model
   */
  readonly fields: SoccerLeagueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SoccerLeague.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SoccerLeagueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends SoccerLeague$UserArgs<ExtArgs> = {}>(args?: Subset<T, SoccerLeague$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Teams<T extends SoccerLeague$TeamsArgs<ExtArgs> = {}>(args?: Subset<T, SoccerLeague$TeamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsSoccerLeaguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SoccerLeague model
   */
  interface SoccerLeagueFieldRefs {
    readonly id: FieldRef<"SoccerLeague", 'Int'>
    readonly userId: FieldRef<"SoccerLeague", 'Int'>
    readonly name: FieldRef<"SoccerLeague", 'String'>
    readonly stage: FieldRef<"SoccerLeague", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SoccerLeague findUnique
   */
  export type SoccerLeagueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoccerLeague
     */
    select?: SoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoccerLeague
     */
    omit?: SoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoccerLeagueInclude<ExtArgs> | null
    /**
     * Filter, which SoccerLeague to fetch.
     */
    where: SoccerLeagueWhereUniqueInput
  }

  /**
   * SoccerLeague findUniqueOrThrow
   */
  export type SoccerLeagueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoccerLeague
     */
    select?: SoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoccerLeague
     */
    omit?: SoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoccerLeagueInclude<ExtArgs> | null
    /**
     * Filter, which SoccerLeague to fetch.
     */
    where: SoccerLeagueWhereUniqueInput
  }

  /**
   * SoccerLeague findFirst
   */
  export type SoccerLeagueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoccerLeague
     */
    select?: SoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoccerLeague
     */
    omit?: SoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoccerLeagueInclude<ExtArgs> | null
    /**
     * Filter, which SoccerLeague to fetch.
     */
    where?: SoccerLeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoccerLeagues to fetch.
     */
    orderBy?: SoccerLeagueOrderByWithRelationInput | SoccerLeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SoccerLeagues.
     */
    cursor?: SoccerLeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoccerLeagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoccerLeagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SoccerLeagues.
     */
    distinct?: SoccerLeagueScalarFieldEnum | SoccerLeagueScalarFieldEnum[]
  }

  /**
   * SoccerLeague findFirstOrThrow
   */
  export type SoccerLeagueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoccerLeague
     */
    select?: SoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoccerLeague
     */
    omit?: SoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoccerLeagueInclude<ExtArgs> | null
    /**
     * Filter, which SoccerLeague to fetch.
     */
    where?: SoccerLeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoccerLeagues to fetch.
     */
    orderBy?: SoccerLeagueOrderByWithRelationInput | SoccerLeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SoccerLeagues.
     */
    cursor?: SoccerLeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoccerLeagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoccerLeagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SoccerLeagues.
     */
    distinct?: SoccerLeagueScalarFieldEnum | SoccerLeagueScalarFieldEnum[]
  }

  /**
   * SoccerLeague findMany
   */
  export type SoccerLeagueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoccerLeague
     */
    select?: SoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoccerLeague
     */
    omit?: SoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoccerLeagueInclude<ExtArgs> | null
    /**
     * Filter, which SoccerLeagues to fetch.
     */
    where?: SoccerLeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoccerLeagues to fetch.
     */
    orderBy?: SoccerLeagueOrderByWithRelationInput | SoccerLeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SoccerLeagues.
     */
    cursor?: SoccerLeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoccerLeagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoccerLeagues.
     */
    skip?: number
    distinct?: SoccerLeagueScalarFieldEnum | SoccerLeagueScalarFieldEnum[]
  }

  /**
   * SoccerLeague create
   */
  export type SoccerLeagueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoccerLeague
     */
    select?: SoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoccerLeague
     */
    omit?: SoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoccerLeagueInclude<ExtArgs> | null
    /**
     * The data needed to create a SoccerLeague.
     */
    data: XOR<SoccerLeagueCreateInput, SoccerLeagueUncheckedCreateInput>
  }

  /**
   * SoccerLeague createMany
   */
  export type SoccerLeagueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SoccerLeagues.
     */
    data: SoccerLeagueCreateManyInput | SoccerLeagueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SoccerLeague createManyAndReturn
   */
  export type SoccerLeagueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoccerLeague
     */
    select?: SoccerLeagueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SoccerLeague
     */
    omit?: SoccerLeagueOmit<ExtArgs> | null
    /**
     * The data used to create many SoccerLeagues.
     */
    data: SoccerLeagueCreateManyInput | SoccerLeagueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoccerLeagueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SoccerLeague update
   */
  export type SoccerLeagueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoccerLeague
     */
    select?: SoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoccerLeague
     */
    omit?: SoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoccerLeagueInclude<ExtArgs> | null
    /**
     * The data needed to update a SoccerLeague.
     */
    data: XOR<SoccerLeagueUpdateInput, SoccerLeagueUncheckedUpdateInput>
    /**
     * Choose, which SoccerLeague to update.
     */
    where: SoccerLeagueWhereUniqueInput
  }

  /**
   * SoccerLeague updateMany
   */
  export type SoccerLeagueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SoccerLeagues.
     */
    data: XOR<SoccerLeagueUpdateManyMutationInput, SoccerLeagueUncheckedUpdateManyInput>
    /**
     * Filter which SoccerLeagues to update
     */
    where?: SoccerLeagueWhereInput
    /**
     * Limit how many SoccerLeagues to update.
     */
    limit?: number
  }

  /**
   * SoccerLeague updateManyAndReturn
   */
  export type SoccerLeagueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoccerLeague
     */
    select?: SoccerLeagueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SoccerLeague
     */
    omit?: SoccerLeagueOmit<ExtArgs> | null
    /**
     * The data used to update SoccerLeagues.
     */
    data: XOR<SoccerLeagueUpdateManyMutationInput, SoccerLeagueUncheckedUpdateManyInput>
    /**
     * Filter which SoccerLeagues to update
     */
    where?: SoccerLeagueWhereInput
    /**
     * Limit how many SoccerLeagues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoccerLeagueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SoccerLeague upsert
   */
  export type SoccerLeagueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoccerLeague
     */
    select?: SoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoccerLeague
     */
    omit?: SoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoccerLeagueInclude<ExtArgs> | null
    /**
     * The filter to search for the SoccerLeague to update in case it exists.
     */
    where: SoccerLeagueWhereUniqueInput
    /**
     * In case the SoccerLeague found by the `where` argument doesn't exist, create a new SoccerLeague with this data.
     */
    create: XOR<SoccerLeagueCreateInput, SoccerLeagueUncheckedCreateInput>
    /**
     * In case the SoccerLeague was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SoccerLeagueUpdateInput, SoccerLeagueUncheckedUpdateInput>
  }

  /**
   * SoccerLeague delete
   */
  export type SoccerLeagueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoccerLeague
     */
    select?: SoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoccerLeague
     */
    omit?: SoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoccerLeagueInclude<ExtArgs> | null
    /**
     * Filter which SoccerLeague to delete.
     */
    where: SoccerLeagueWhereUniqueInput
  }

  /**
   * SoccerLeague deleteMany
   */
  export type SoccerLeagueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SoccerLeagues to delete
     */
    where?: SoccerLeagueWhereInput
    /**
     * Limit how many SoccerLeagues to delete.
     */
    limit?: number
  }

  /**
   * SoccerLeague.User
   */
  export type SoccerLeague$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SoccerLeague.Teams
   */
  export type SoccerLeague$TeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsSoccerLeague
     */
    select?: TeamsSoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsSoccerLeague
     */
    omit?: TeamsSoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsSoccerLeagueInclude<ExtArgs> | null
    where?: TeamsSoccerLeagueWhereInput
    orderBy?: TeamsSoccerLeagueOrderByWithRelationInput | TeamsSoccerLeagueOrderByWithRelationInput[]
    cursor?: TeamsSoccerLeagueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsSoccerLeagueScalarFieldEnum | TeamsSoccerLeagueScalarFieldEnum[]
  }

  /**
   * SoccerLeague without action
   */
  export type SoccerLeagueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoccerLeague
     */
    select?: SoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoccerLeague
     */
    omit?: SoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoccerLeagueInclude<ExtArgs> | null
  }


  /**
   * Model TeamsSoccerLeague
   */

  export type AggregateTeamsSoccerLeague = {
    _count: TeamsSoccerLeagueCountAggregateOutputType | null
    _avg: TeamsSoccerLeagueAvgAggregateOutputType | null
    _sum: TeamsSoccerLeagueSumAggregateOutputType | null
    _min: TeamsSoccerLeagueMinAggregateOutputType | null
    _max: TeamsSoccerLeagueMaxAggregateOutputType | null
  }

  export type TeamsSoccerLeagueAvgAggregateOutputType = {
    id: number | null
    soccerLeagueId: number | null
  }

  export type TeamsSoccerLeagueSumAggregateOutputType = {
    id: number | null
    soccerLeagueId: number | null
  }

  export type TeamsSoccerLeagueMinAggregateOutputType = {
    id: number | null
    soccerLeagueId: number | null
    name: string | null
    abr: string | null
    logo: string | null
  }

  export type TeamsSoccerLeagueMaxAggregateOutputType = {
    id: number | null
    soccerLeagueId: number | null
    name: string | null
    abr: string | null
    logo: string | null
  }

  export type TeamsSoccerLeagueCountAggregateOutputType = {
    id: number
    soccerLeagueId: number
    name: number
    abr: number
    logo: number
    _all: number
  }


  export type TeamsSoccerLeagueAvgAggregateInputType = {
    id?: true
    soccerLeagueId?: true
  }

  export type TeamsSoccerLeagueSumAggregateInputType = {
    id?: true
    soccerLeagueId?: true
  }

  export type TeamsSoccerLeagueMinAggregateInputType = {
    id?: true
    soccerLeagueId?: true
    name?: true
    abr?: true
    logo?: true
  }

  export type TeamsSoccerLeagueMaxAggregateInputType = {
    id?: true
    soccerLeagueId?: true
    name?: true
    abr?: true
    logo?: true
  }

  export type TeamsSoccerLeagueCountAggregateInputType = {
    id?: true
    soccerLeagueId?: true
    name?: true
    abr?: true
    logo?: true
    _all?: true
  }

  export type TeamsSoccerLeagueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamsSoccerLeague to aggregate.
     */
    where?: TeamsSoccerLeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsSoccerLeagues to fetch.
     */
    orderBy?: TeamsSoccerLeagueOrderByWithRelationInput | TeamsSoccerLeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamsSoccerLeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsSoccerLeagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsSoccerLeagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamsSoccerLeagues
    **/
    _count?: true | TeamsSoccerLeagueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamsSoccerLeagueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamsSoccerLeagueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsSoccerLeagueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsSoccerLeagueMaxAggregateInputType
  }

  export type GetTeamsSoccerLeagueAggregateType<T extends TeamsSoccerLeagueAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamsSoccerLeague]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamsSoccerLeague[P]>
      : GetScalarType<T[P], AggregateTeamsSoccerLeague[P]>
  }




  export type TeamsSoccerLeagueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsSoccerLeagueWhereInput
    orderBy?: TeamsSoccerLeagueOrderByWithAggregationInput | TeamsSoccerLeagueOrderByWithAggregationInput[]
    by: TeamsSoccerLeagueScalarFieldEnum[] | TeamsSoccerLeagueScalarFieldEnum
    having?: TeamsSoccerLeagueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsSoccerLeagueCountAggregateInputType | true
    _avg?: TeamsSoccerLeagueAvgAggregateInputType
    _sum?: TeamsSoccerLeagueSumAggregateInputType
    _min?: TeamsSoccerLeagueMinAggregateInputType
    _max?: TeamsSoccerLeagueMaxAggregateInputType
  }

  export type TeamsSoccerLeagueGroupByOutputType = {
    id: number
    soccerLeagueId: number | null
    name: string
    abr: string
    logo: string | null
    _count: TeamsSoccerLeagueCountAggregateOutputType | null
    _avg: TeamsSoccerLeagueAvgAggregateOutputType | null
    _sum: TeamsSoccerLeagueSumAggregateOutputType | null
    _min: TeamsSoccerLeagueMinAggregateOutputType | null
    _max: TeamsSoccerLeagueMaxAggregateOutputType | null
  }

  type GetTeamsSoccerLeagueGroupByPayload<T extends TeamsSoccerLeagueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamsSoccerLeagueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsSoccerLeagueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsSoccerLeagueGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsSoccerLeagueGroupByOutputType[P]>
        }
      >
    >


  export type TeamsSoccerLeagueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    soccerLeagueId?: boolean
    name?: boolean
    abr?: boolean
    logo?: boolean
    SoccerLeague?: boolean | TeamsSoccerLeague$SoccerLeagueArgs<ExtArgs>
    Players?: boolean | TeamsSoccerLeague$PlayersArgs<ExtArgs>
    _count?: boolean | TeamsSoccerLeagueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamsSoccerLeague"]>

  export type TeamsSoccerLeagueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    soccerLeagueId?: boolean
    name?: boolean
    abr?: boolean
    logo?: boolean
    SoccerLeague?: boolean | TeamsSoccerLeague$SoccerLeagueArgs<ExtArgs>
  }, ExtArgs["result"]["teamsSoccerLeague"]>

  export type TeamsSoccerLeagueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    soccerLeagueId?: boolean
    name?: boolean
    abr?: boolean
    logo?: boolean
    SoccerLeague?: boolean | TeamsSoccerLeague$SoccerLeagueArgs<ExtArgs>
  }, ExtArgs["result"]["teamsSoccerLeague"]>

  export type TeamsSoccerLeagueSelectScalar = {
    id?: boolean
    soccerLeagueId?: boolean
    name?: boolean
    abr?: boolean
    logo?: boolean
  }

  export type TeamsSoccerLeagueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "soccerLeagueId" | "name" | "abr" | "logo", ExtArgs["result"]["teamsSoccerLeague"]>
  export type TeamsSoccerLeagueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SoccerLeague?: boolean | TeamsSoccerLeague$SoccerLeagueArgs<ExtArgs>
    Players?: boolean | TeamsSoccerLeague$PlayersArgs<ExtArgs>
    _count?: boolean | TeamsSoccerLeagueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamsSoccerLeagueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SoccerLeague?: boolean | TeamsSoccerLeague$SoccerLeagueArgs<ExtArgs>
  }
  export type TeamsSoccerLeagueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SoccerLeague?: boolean | TeamsSoccerLeague$SoccerLeagueArgs<ExtArgs>
  }

  export type $TeamsSoccerLeaguePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamsSoccerLeague"
    objects: {
      SoccerLeague: Prisma.$SoccerLeaguePayload<ExtArgs> | null
      Players: Prisma.$PlayersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      soccerLeagueId: number | null
      name: string
      abr: string
      logo: string | null
    }, ExtArgs["result"]["teamsSoccerLeague"]>
    composites: {}
  }

  type TeamsSoccerLeagueGetPayload<S extends boolean | null | undefined | TeamsSoccerLeagueDefaultArgs> = $Result.GetResult<Prisma.$TeamsSoccerLeaguePayload, S>

  type TeamsSoccerLeagueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamsSoccerLeagueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamsSoccerLeagueCountAggregateInputType | true
    }

  export interface TeamsSoccerLeagueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamsSoccerLeague'], meta: { name: 'TeamsSoccerLeague' } }
    /**
     * Find zero or one TeamsSoccerLeague that matches the filter.
     * @param {TeamsSoccerLeagueFindUniqueArgs} args - Arguments to find a TeamsSoccerLeague
     * @example
     * // Get one TeamsSoccerLeague
     * const teamsSoccerLeague = await prisma.teamsSoccerLeague.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamsSoccerLeagueFindUniqueArgs>(args: SelectSubset<T, TeamsSoccerLeagueFindUniqueArgs<ExtArgs>>): Prisma__TeamsSoccerLeagueClient<$Result.GetResult<Prisma.$TeamsSoccerLeaguePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamsSoccerLeague that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamsSoccerLeagueFindUniqueOrThrowArgs} args - Arguments to find a TeamsSoccerLeague
     * @example
     * // Get one TeamsSoccerLeague
     * const teamsSoccerLeague = await prisma.teamsSoccerLeague.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamsSoccerLeagueFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamsSoccerLeagueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamsSoccerLeagueClient<$Result.GetResult<Prisma.$TeamsSoccerLeaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamsSoccerLeague that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsSoccerLeagueFindFirstArgs} args - Arguments to find a TeamsSoccerLeague
     * @example
     * // Get one TeamsSoccerLeague
     * const teamsSoccerLeague = await prisma.teamsSoccerLeague.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamsSoccerLeagueFindFirstArgs>(args?: SelectSubset<T, TeamsSoccerLeagueFindFirstArgs<ExtArgs>>): Prisma__TeamsSoccerLeagueClient<$Result.GetResult<Prisma.$TeamsSoccerLeaguePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamsSoccerLeague that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsSoccerLeagueFindFirstOrThrowArgs} args - Arguments to find a TeamsSoccerLeague
     * @example
     * // Get one TeamsSoccerLeague
     * const teamsSoccerLeague = await prisma.teamsSoccerLeague.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamsSoccerLeagueFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamsSoccerLeagueFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamsSoccerLeagueClient<$Result.GetResult<Prisma.$TeamsSoccerLeaguePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamsSoccerLeagues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsSoccerLeagueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamsSoccerLeagues
     * const teamsSoccerLeagues = await prisma.teamsSoccerLeague.findMany()
     * 
     * // Get first 10 TeamsSoccerLeagues
     * const teamsSoccerLeagues = await prisma.teamsSoccerLeague.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamsSoccerLeagueWithIdOnly = await prisma.teamsSoccerLeague.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamsSoccerLeagueFindManyArgs>(args?: SelectSubset<T, TeamsSoccerLeagueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsSoccerLeaguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamsSoccerLeague.
     * @param {TeamsSoccerLeagueCreateArgs} args - Arguments to create a TeamsSoccerLeague.
     * @example
     * // Create one TeamsSoccerLeague
     * const TeamsSoccerLeague = await prisma.teamsSoccerLeague.create({
     *   data: {
     *     // ... data to create a TeamsSoccerLeague
     *   }
     * })
     * 
     */
    create<T extends TeamsSoccerLeagueCreateArgs>(args: SelectSubset<T, TeamsSoccerLeagueCreateArgs<ExtArgs>>): Prisma__TeamsSoccerLeagueClient<$Result.GetResult<Prisma.$TeamsSoccerLeaguePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamsSoccerLeagues.
     * @param {TeamsSoccerLeagueCreateManyArgs} args - Arguments to create many TeamsSoccerLeagues.
     * @example
     * // Create many TeamsSoccerLeagues
     * const teamsSoccerLeague = await prisma.teamsSoccerLeague.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamsSoccerLeagueCreateManyArgs>(args?: SelectSubset<T, TeamsSoccerLeagueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamsSoccerLeagues and returns the data saved in the database.
     * @param {TeamsSoccerLeagueCreateManyAndReturnArgs} args - Arguments to create many TeamsSoccerLeagues.
     * @example
     * // Create many TeamsSoccerLeagues
     * const teamsSoccerLeague = await prisma.teamsSoccerLeague.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamsSoccerLeagues and only return the `id`
     * const teamsSoccerLeagueWithIdOnly = await prisma.teamsSoccerLeague.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamsSoccerLeagueCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamsSoccerLeagueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsSoccerLeaguePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamsSoccerLeague.
     * @param {TeamsSoccerLeagueDeleteArgs} args - Arguments to delete one TeamsSoccerLeague.
     * @example
     * // Delete one TeamsSoccerLeague
     * const TeamsSoccerLeague = await prisma.teamsSoccerLeague.delete({
     *   where: {
     *     // ... filter to delete one TeamsSoccerLeague
     *   }
     * })
     * 
     */
    delete<T extends TeamsSoccerLeagueDeleteArgs>(args: SelectSubset<T, TeamsSoccerLeagueDeleteArgs<ExtArgs>>): Prisma__TeamsSoccerLeagueClient<$Result.GetResult<Prisma.$TeamsSoccerLeaguePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamsSoccerLeague.
     * @param {TeamsSoccerLeagueUpdateArgs} args - Arguments to update one TeamsSoccerLeague.
     * @example
     * // Update one TeamsSoccerLeague
     * const teamsSoccerLeague = await prisma.teamsSoccerLeague.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamsSoccerLeagueUpdateArgs>(args: SelectSubset<T, TeamsSoccerLeagueUpdateArgs<ExtArgs>>): Prisma__TeamsSoccerLeagueClient<$Result.GetResult<Prisma.$TeamsSoccerLeaguePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamsSoccerLeagues.
     * @param {TeamsSoccerLeagueDeleteManyArgs} args - Arguments to filter TeamsSoccerLeagues to delete.
     * @example
     * // Delete a few TeamsSoccerLeagues
     * const { count } = await prisma.teamsSoccerLeague.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamsSoccerLeagueDeleteManyArgs>(args?: SelectSubset<T, TeamsSoccerLeagueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamsSoccerLeagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsSoccerLeagueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamsSoccerLeagues
     * const teamsSoccerLeague = await prisma.teamsSoccerLeague.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamsSoccerLeagueUpdateManyArgs>(args: SelectSubset<T, TeamsSoccerLeagueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamsSoccerLeagues and returns the data updated in the database.
     * @param {TeamsSoccerLeagueUpdateManyAndReturnArgs} args - Arguments to update many TeamsSoccerLeagues.
     * @example
     * // Update many TeamsSoccerLeagues
     * const teamsSoccerLeague = await prisma.teamsSoccerLeague.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamsSoccerLeagues and only return the `id`
     * const teamsSoccerLeagueWithIdOnly = await prisma.teamsSoccerLeague.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamsSoccerLeagueUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamsSoccerLeagueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsSoccerLeaguePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamsSoccerLeague.
     * @param {TeamsSoccerLeagueUpsertArgs} args - Arguments to update or create a TeamsSoccerLeague.
     * @example
     * // Update or create a TeamsSoccerLeague
     * const teamsSoccerLeague = await prisma.teamsSoccerLeague.upsert({
     *   create: {
     *     // ... data to create a TeamsSoccerLeague
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamsSoccerLeague we want to update
     *   }
     * })
     */
    upsert<T extends TeamsSoccerLeagueUpsertArgs>(args: SelectSubset<T, TeamsSoccerLeagueUpsertArgs<ExtArgs>>): Prisma__TeamsSoccerLeagueClient<$Result.GetResult<Prisma.$TeamsSoccerLeaguePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamsSoccerLeagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsSoccerLeagueCountArgs} args - Arguments to filter TeamsSoccerLeagues to count.
     * @example
     * // Count the number of TeamsSoccerLeagues
     * const count = await prisma.teamsSoccerLeague.count({
     *   where: {
     *     // ... the filter for the TeamsSoccerLeagues we want to count
     *   }
     * })
    **/
    count<T extends TeamsSoccerLeagueCountArgs>(
      args?: Subset<T, TeamsSoccerLeagueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsSoccerLeagueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamsSoccerLeague.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsSoccerLeagueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamsSoccerLeagueAggregateArgs>(args: Subset<T, TeamsSoccerLeagueAggregateArgs>): Prisma.PrismaPromise<GetTeamsSoccerLeagueAggregateType<T>>

    /**
     * Group by TeamsSoccerLeague.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsSoccerLeagueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamsSoccerLeagueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamsSoccerLeagueGroupByArgs['orderBy'] }
        : { orderBy?: TeamsSoccerLeagueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamsSoccerLeagueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsSoccerLeagueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamsSoccerLeague model
   */
  readonly fields: TeamsSoccerLeagueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamsSoccerLeague.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamsSoccerLeagueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SoccerLeague<T extends TeamsSoccerLeague$SoccerLeagueArgs<ExtArgs> = {}>(args?: Subset<T, TeamsSoccerLeague$SoccerLeagueArgs<ExtArgs>>): Prisma__SoccerLeagueClient<$Result.GetResult<Prisma.$SoccerLeaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Players<T extends TeamsSoccerLeague$PlayersArgs<ExtArgs> = {}>(args?: Subset<T, TeamsSoccerLeague$PlayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamsSoccerLeague model
   */
  interface TeamsSoccerLeagueFieldRefs {
    readonly id: FieldRef<"TeamsSoccerLeague", 'Int'>
    readonly soccerLeagueId: FieldRef<"TeamsSoccerLeague", 'Int'>
    readonly name: FieldRef<"TeamsSoccerLeague", 'String'>
    readonly abr: FieldRef<"TeamsSoccerLeague", 'String'>
    readonly logo: FieldRef<"TeamsSoccerLeague", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TeamsSoccerLeague findUnique
   */
  export type TeamsSoccerLeagueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsSoccerLeague
     */
    select?: TeamsSoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsSoccerLeague
     */
    omit?: TeamsSoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsSoccerLeagueInclude<ExtArgs> | null
    /**
     * Filter, which TeamsSoccerLeague to fetch.
     */
    where: TeamsSoccerLeagueWhereUniqueInput
  }

  /**
   * TeamsSoccerLeague findUniqueOrThrow
   */
  export type TeamsSoccerLeagueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsSoccerLeague
     */
    select?: TeamsSoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsSoccerLeague
     */
    omit?: TeamsSoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsSoccerLeagueInclude<ExtArgs> | null
    /**
     * Filter, which TeamsSoccerLeague to fetch.
     */
    where: TeamsSoccerLeagueWhereUniqueInput
  }

  /**
   * TeamsSoccerLeague findFirst
   */
  export type TeamsSoccerLeagueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsSoccerLeague
     */
    select?: TeamsSoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsSoccerLeague
     */
    omit?: TeamsSoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsSoccerLeagueInclude<ExtArgs> | null
    /**
     * Filter, which TeamsSoccerLeague to fetch.
     */
    where?: TeamsSoccerLeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsSoccerLeagues to fetch.
     */
    orderBy?: TeamsSoccerLeagueOrderByWithRelationInput | TeamsSoccerLeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamsSoccerLeagues.
     */
    cursor?: TeamsSoccerLeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsSoccerLeagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsSoccerLeagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamsSoccerLeagues.
     */
    distinct?: TeamsSoccerLeagueScalarFieldEnum | TeamsSoccerLeagueScalarFieldEnum[]
  }

  /**
   * TeamsSoccerLeague findFirstOrThrow
   */
  export type TeamsSoccerLeagueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsSoccerLeague
     */
    select?: TeamsSoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsSoccerLeague
     */
    omit?: TeamsSoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsSoccerLeagueInclude<ExtArgs> | null
    /**
     * Filter, which TeamsSoccerLeague to fetch.
     */
    where?: TeamsSoccerLeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsSoccerLeagues to fetch.
     */
    orderBy?: TeamsSoccerLeagueOrderByWithRelationInput | TeamsSoccerLeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamsSoccerLeagues.
     */
    cursor?: TeamsSoccerLeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsSoccerLeagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsSoccerLeagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamsSoccerLeagues.
     */
    distinct?: TeamsSoccerLeagueScalarFieldEnum | TeamsSoccerLeagueScalarFieldEnum[]
  }

  /**
   * TeamsSoccerLeague findMany
   */
  export type TeamsSoccerLeagueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsSoccerLeague
     */
    select?: TeamsSoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsSoccerLeague
     */
    omit?: TeamsSoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsSoccerLeagueInclude<ExtArgs> | null
    /**
     * Filter, which TeamsSoccerLeagues to fetch.
     */
    where?: TeamsSoccerLeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsSoccerLeagues to fetch.
     */
    orderBy?: TeamsSoccerLeagueOrderByWithRelationInput | TeamsSoccerLeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamsSoccerLeagues.
     */
    cursor?: TeamsSoccerLeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsSoccerLeagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsSoccerLeagues.
     */
    skip?: number
    distinct?: TeamsSoccerLeagueScalarFieldEnum | TeamsSoccerLeagueScalarFieldEnum[]
  }

  /**
   * TeamsSoccerLeague create
   */
  export type TeamsSoccerLeagueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsSoccerLeague
     */
    select?: TeamsSoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsSoccerLeague
     */
    omit?: TeamsSoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsSoccerLeagueInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamsSoccerLeague.
     */
    data: XOR<TeamsSoccerLeagueCreateInput, TeamsSoccerLeagueUncheckedCreateInput>
  }

  /**
   * TeamsSoccerLeague createMany
   */
  export type TeamsSoccerLeagueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamsSoccerLeagues.
     */
    data: TeamsSoccerLeagueCreateManyInput | TeamsSoccerLeagueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamsSoccerLeague createManyAndReturn
   */
  export type TeamsSoccerLeagueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsSoccerLeague
     */
    select?: TeamsSoccerLeagueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsSoccerLeague
     */
    omit?: TeamsSoccerLeagueOmit<ExtArgs> | null
    /**
     * The data used to create many TeamsSoccerLeagues.
     */
    data: TeamsSoccerLeagueCreateManyInput | TeamsSoccerLeagueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsSoccerLeagueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamsSoccerLeague update
   */
  export type TeamsSoccerLeagueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsSoccerLeague
     */
    select?: TeamsSoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsSoccerLeague
     */
    omit?: TeamsSoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsSoccerLeagueInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamsSoccerLeague.
     */
    data: XOR<TeamsSoccerLeagueUpdateInput, TeamsSoccerLeagueUncheckedUpdateInput>
    /**
     * Choose, which TeamsSoccerLeague to update.
     */
    where: TeamsSoccerLeagueWhereUniqueInput
  }

  /**
   * TeamsSoccerLeague updateMany
   */
  export type TeamsSoccerLeagueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamsSoccerLeagues.
     */
    data: XOR<TeamsSoccerLeagueUpdateManyMutationInput, TeamsSoccerLeagueUncheckedUpdateManyInput>
    /**
     * Filter which TeamsSoccerLeagues to update
     */
    where?: TeamsSoccerLeagueWhereInput
    /**
     * Limit how many TeamsSoccerLeagues to update.
     */
    limit?: number
  }

  /**
   * TeamsSoccerLeague updateManyAndReturn
   */
  export type TeamsSoccerLeagueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsSoccerLeague
     */
    select?: TeamsSoccerLeagueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsSoccerLeague
     */
    omit?: TeamsSoccerLeagueOmit<ExtArgs> | null
    /**
     * The data used to update TeamsSoccerLeagues.
     */
    data: XOR<TeamsSoccerLeagueUpdateManyMutationInput, TeamsSoccerLeagueUncheckedUpdateManyInput>
    /**
     * Filter which TeamsSoccerLeagues to update
     */
    where?: TeamsSoccerLeagueWhereInput
    /**
     * Limit how many TeamsSoccerLeagues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsSoccerLeagueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamsSoccerLeague upsert
   */
  export type TeamsSoccerLeagueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsSoccerLeague
     */
    select?: TeamsSoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsSoccerLeague
     */
    omit?: TeamsSoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsSoccerLeagueInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamsSoccerLeague to update in case it exists.
     */
    where: TeamsSoccerLeagueWhereUniqueInput
    /**
     * In case the TeamsSoccerLeague found by the `where` argument doesn't exist, create a new TeamsSoccerLeague with this data.
     */
    create: XOR<TeamsSoccerLeagueCreateInput, TeamsSoccerLeagueUncheckedCreateInput>
    /**
     * In case the TeamsSoccerLeague was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamsSoccerLeagueUpdateInput, TeamsSoccerLeagueUncheckedUpdateInput>
  }

  /**
   * TeamsSoccerLeague delete
   */
  export type TeamsSoccerLeagueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsSoccerLeague
     */
    select?: TeamsSoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsSoccerLeague
     */
    omit?: TeamsSoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsSoccerLeagueInclude<ExtArgs> | null
    /**
     * Filter which TeamsSoccerLeague to delete.
     */
    where: TeamsSoccerLeagueWhereUniqueInput
  }

  /**
   * TeamsSoccerLeague deleteMany
   */
  export type TeamsSoccerLeagueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamsSoccerLeagues to delete
     */
    where?: TeamsSoccerLeagueWhereInput
    /**
     * Limit how many TeamsSoccerLeagues to delete.
     */
    limit?: number
  }

  /**
   * TeamsSoccerLeague.SoccerLeague
   */
  export type TeamsSoccerLeague$SoccerLeagueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoccerLeague
     */
    select?: SoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoccerLeague
     */
    omit?: SoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoccerLeagueInclude<ExtArgs> | null
    where?: SoccerLeagueWhereInput
  }

  /**
   * TeamsSoccerLeague.Players
   */
  export type TeamsSoccerLeague$PlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    where?: PlayersWhereInput
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    cursor?: PlayersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * TeamsSoccerLeague without action
   */
  export type TeamsSoccerLeagueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsSoccerLeague
     */
    select?: TeamsSoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsSoccerLeague
     */
    omit?: TeamsSoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsSoccerLeagueInclude<ExtArgs> | null
  }


  /**
   * Model Players
   */

  export type AggregatePlayers = {
    _count: PlayersCountAggregateOutputType | null
    _avg: PlayersAvgAggregateOutputType | null
    _sum: PlayersSumAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  export type PlayersAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    name: number | null
  }

  export type PlayersSumAggregateOutputType = {
    id: number | null
    teamId: number | null
    name: number | null
  }

  export type PlayersMinAggregateOutputType = {
    id: number | null
    teamId: number | null
    name: number | null
  }

  export type PlayersMaxAggregateOutputType = {
    id: number | null
    teamId: number | null
    name: number | null
  }

  export type PlayersCountAggregateOutputType = {
    id: number
    teamId: number
    name: number
    _all: number
  }


  export type PlayersAvgAggregateInputType = {
    id?: true
    teamId?: true
    name?: true
  }

  export type PlayersSumAggregateInputType = {
    id?: true
    teamId?: true
    name?: true
  }

  export type PlayersMinAggregateInputType = {
    id?: true
    teamId?: true
    name?: true
  }

  export type PlayersMaxAggregateInputType = {
    id?: true
    teamId?: true
    name?: true
  }

  export type PlayersCountAggregateInputType = {
    id?: true
    teamId?: true
    name?: true
    _all?: true
  }

  export type PlayersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to aggregate.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayersMaxAggregateInputType
  }

  export type GetPlayersAggregateType<T extends PlayersAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayers[P]>
      : GetScalarType<T[P], AggregatePlayers[P]>
  }




  export type PlayersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayersWhereInput
    orderBy?: PlayersOrderByWithAggregationInput | PlayersOrderByWithAggregationInput[]
    by: PlayersScalarFieldEnum[] | PlayersScalarFieldEnum
    having?: PlayersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayersCountAggregateInputType | true
    _avg?: PlayersAvgAggregateInputType
    _sum?: PlayersSumAggregateInputType
    _min?: PlayersMinAggregateInputType
    _max?: PlayersMaxAggregateInputType
  }

  export type PlayersGroupByOutputType = {
    id: number
    teamId: number | null
    name: number
    _count: PlayersCountAggregateOutputType | null
    _avg: PlayersAvgAggregateOutputType | null
    _sum: PlayersSumAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  type GetPlayersGroupByPayload<T extends PlayersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayersGroupByOutputType[P]>
            : GetScalarType<T[P], PlayersGroupByOutputType[P]>
        }
      >
    >


  export type PlayersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    name?: boolean
    TeamsSoccerLeague?: boolean | Players$TeamsSoccerLeagueArgs<ExtArgs>
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    name?: boolean
    TeamsSoccerLeague?: boolean | Players$TeamsSoccerLeagueArgs<ExtArgs>
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    name?: boolean
    TeamsSoccerLeague?: boolean | Players$TeamsSoccerLeagueArgs<ExtArgs>
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectScalar = {
    id?: boolean
    teamId?: boolean
    name?: boolean
  }

  export type PlayersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "name", ExtArgs["result"]["players"]>
  export type PlayersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TeamsSoccerLeague?: boolean | Players$TeamsSoccerLeagueArgs<ExtArgs>
  }
  export type PlayersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TeamsSoccerLeague?: boolean | Players$TeamsSoccerLeagueArgs<ExtArgs>
  }
  export type PlayersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TeamsSoccerLeague?: boolean | Players$TeamsSoccerLeagueArgs<ExtArgs>
  }

  export type $PlayersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Players"
    objects: {
      TeamsSoccerLeague: Prisma.$TeamsSoccerLeaguePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamId: number | null
      name: number
    }, ExtArgs["result"]["players"]>
    composites: {}
  }

  type PlayersGetPayload<S extends boolean | null | undefined | PlayersDefaultArgs> = $Result.GetResult<Prisma.$PlayersPayload, S>

  type PlayersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayersCountAggregateInputType | true
    }

  export interface PlayersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Players'], meta: { name: 'Players' } }
    /**
     * Find zero or one Players that matches the filter.
     * @param {PlayersFindUniqueArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayersFindUniqueArgs>(args: SelectSubset<T, PlayersFindUniqueArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Players that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayersFindUniqueOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayersFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindFirstArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayersFindFirstArgs>(args?: SelectSubset<T, PlayersFindFirstArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindFirstOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayersFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayersFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.players.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.players.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playersWithIdOnly = await prisma.players.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayersFindManyArgs>(args?: SelectSubset<T, PlayersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Players.
     * @param {PlayersCreateArgs} args - Arguments to create a Players.
     * @example
     * // Create one Players
     * const Players = await prisma.players.create({
     *   data: {
     *     // ... data to create a Players
     *   }
     * })
     * 
     */
    create<T extends PlayersCreateArgs>(args: SelectSubset<T, PlayersCreateArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayersCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayersCreateManyArgs>(args?: SelectSubset<T, PlayersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayersCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playersWithIdOnly = await prisma.players.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayersCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Players.
     * @param {PlayersDeleteArgs} args - Arguments to delete one Players.
     * @example
     * // Delete one Players
     * const Players = await prisma.players.delete({
     *   where: {
     *     // ... filter to delete one Players
     *   }
     * })
     * 
     */
    delete<T extends PlayersDeleteArgs>(args: SelectSubset<T, PlayersDeleteArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Players.
     * @param {PlayersUpdateArgs} args - Arguments to update one Players.
     * @example
     * // Update one Players
     * const players = await prisma.players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayersUpdateArgs>(args: SelectSubset<T, PlayersUpdateArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayersDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayersDeleteManyArgs>(args?: SelectSubset<T, PlayersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayersUpdateManyArgs>(args: SelectSubset<T, PlayersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayersUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playersWithIdOnly = await prisma.players.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayersUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Players.
     * @param {PlayersUpsertArgs} args - Arguments to update or create a Players.
     * @example
     * // Update or create a Players
     * const players = await prisma.players.upsert({
     *   create: {
     *     // ... data to create a Players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Players we want to update
     *   }
     * })
     */
    upsert<T extends PlayersUpsertArgs>(args: SelectSubset<T, PlayersUpsertArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.players.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayersCountArgs>(
      args?: Subset<T, PlayersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayersAggregateArgs>(args: Subset<T, PlayersAggregateArgs>): Prisma.PrismaPromise<GetPlayersAggregateType<T>>

    /**
     * Group by Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayersGroupByArgs['orderBy'] }
        : { orderBy?: PlayersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Players model
   */
  readonly fields: PlayersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TeamsSoccerLeague<T extends Players$TeamsSoccerLeagueArgs<ExtArgs> = {}>(args?: Subset<T, Players$TeamsSoccerLeagueArgs<ExtArgs>>): Prisma__TeamsSoccerLeagueClient<$Result.GetResult<Prisma.$TeamsSoccerLeaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Players model
   */
  interface PlayersFieldRefs {
    readonly id: FieldRef<"Players", 'Int'>
    readonly teamId: FieldRef<"Players", 'Int'>
    readonly name: FieldRef<"Players", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Players findUnique
   */
  export type PlayersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players findUniqueOrThrow
   */
  export type PlayersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players findFirst
   */
  export type PlayersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players findFirstOrThrow
   */
  export type PlayersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players findMany
   */
  export type PlayersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players create
   */
  export type PlayersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * The data needed to create a Players.
     */
    data: XOR<PlayersCreateInput, PlayersUncheckedCreateInput>
  }

  /**
   * Players createMany
   */
  export type PlayersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayersCreateManyInput | PlayersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Players createManyAndReturn
   */
  export type PlayersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayersCreateManyInput | PlayersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Players update
   */
  export type PlayersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * The data needed to update a Players.
     */
    data: XOR<PlayersUpdateInput, PlayersUncheckedUpdateInput>
    /**
     * Choose, which Players to update.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players updateMany
   */
  export type PlayersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayersWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Players updateManyAndReturn
   */
  export type PlayersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayersWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Players upsert
   */
  export type PlayersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * The filter to search for the Players to update in case it exists.
     */
    where: PlayersWhereUniqueInput
    /**
     * In case the Players found by the `where` argument doesn't exist, create a new Players with this data.
     */
    create: XOR<PlayersCreateInput, PlayersUncheckedCreateInput>
    /**
     * In case the Players was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayersUpdateInput, PlayersUncheckedUpdateInput>
  }

  /**
   * Players delete
   */
  export type PlayersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter which Players to delete.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players deleteMany
   */
  export type PlayersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayersWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Players.TeamsSoccerLeague
   */
  export type Players$TeamsSoccerLeagueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsSoccerLeague
     */
    select?: TeamsSoccerLeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsSoccerLeague
     */
    omit?: TeamsSoccerLeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsSoccerLeagueInclude<ExtArgs> | null
    where?: TeamsSoccerLeagueWhereInput
  }

  /**
   * Players without action
   */
  export type PlayersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SoccerLeagueScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    stage: 'stage'
  };

  export type SoccerLeagueScalarFieldEnum = (typeof SoccerLeagueScalarFieldEnum)[keyof typeof SoccerLeagueScalarFieldEnum]


  export const TeamsSoccerLeagueScalarFieldEnum: {
    id: 'id',
    soccerLeagueId: 'soccerLeagueId',
    name: 'name',
    abr: 'abr',
    logo: 'logo'
  };

  export type TeamsSoccerLeagueScalarFieldEnum = (typeof TeamsSoccerLeagueScalarFieldEnum)[keyof typeof TeamsSoccerLeagueScalarFieldEnum]


  export const PlayersScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    name: 'name'
  };

  export type PlayersScalarFieldEnum = (typeof PlayersScalarFieldEnum)[keyof typeof PlayersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    soccerLeagues?: SoccerLeagueListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    soccerLeagues?: SoccerLeagueOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    soccerLeagues?: SoccerLeagueListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type SoccerLeagueWhereInput = {
    AND?: SoccerLeagueWhereInput | SoccerLeagueWhereInput[]
    OR?: SoccerLeagueWhereInput[]
    NOT?: SoccerLeagueWhereInput | SoccerLeagueWhereInput[]
    id?: IntFilter<"SoccerLeague"> | number
    userId?: IntNullableFilter<"SoccerLeague"> | number | null
    name?: StringFilter<"SoccerLeague"> | string
    stage?: IntFilter<"SoccerLeague"> | number
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Teams?: TeamsSoccerLeagueListRelationFilter
  }

  export type SoccerLeagueOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    stage?: SortOrder
    User?: UserOrderByWithRelationInput
    Teams?: TeamsSoccerLeagueOrderByRelationAggregateInput
  }

  export type SoccerLeagueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SoccerLeagueWhereInput | SoccerLeagueWhereInput[]
    OR?: SoccerLeagueWhereInput[]
    NOT?: SoccerLeagueWhereInput | SoccerLeagueWhereInput[]
    userId?: IntNullableFilter<"SoccerLeague"> | number | null
    name?: StringFilter<"SoccerLeague"> | string
    stage?: IntFilter<"SoccerLeague"> | number
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Teams?: TeamsSoccerLeagueListRelationFilter
  }, "id">

  export type SoccerLeagueOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    stage?: SortOrder
    _count?: SoccerLeagueCountOrderByAggregateInput
    _avg?: SoccerLeagueAvgOrderByAggregateInput
    _max?: SoccerLeagueMaxOrderByAggregateInput
    _min?: SoccerLeagueMinOrderByAggregateInput
    _sum?: SoccerLeagueSumOrderByAggregateInput
  }

  export type SoccerLeagueScalarWhereWithAggregatesInput = {
    AND?: SoccerLeagueScalarWhereWithAggregatesInput | SoccerLeagueScalarWhereWithAggregatesInput[]
    OR?: SoccerLeagueScalarWhereWithAggregatesInput[]
    NOT?: SoccerLeagueScalarWhereWithAggregatesInput | SoccerLeagueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SoccerLeague"> | number
    userId?: IntNullableWithAggregatesFilter<"SoccerLeague"> | number | null
    name?: StringWithAggregatesFilter<"SoccerLeague"> | string
    stage?: IntWithAggregatesFilter<"SoccerLeague"> | number
  }

  export type TeamsSoccerLeagueWhereInput = {
    AND?: TeamsSoccerLeagueWhereInput | TeamsSoccerLeagueWhereInput[]
    OR?: TeamsSoccerLeagueWhereInput[]
    NOT?: TeamsSoccerLeagueWhereInput | TeamsSoccerLeagueWhereInput[]
    id?: IntFilter<"TeamsSoccerLeague"> | number
    soccerLeagueId?: IntNullableFilter<"TeamsSoccerLeague"> | number | null
    name?: StringFilter<"TeamsSoccerLeague"> | string
    abr?: StringFilter<"TeamsSoccerLeague"> | string
    logo?: StringNullableFilter<"TeamsSoccerLeague"> | string | null
    SoccerLeague?: XOR<SoccerLeagueNullableScalarRelationFilter, SoccerLeagueWhereInput> | null
    Players?: PlayersListRelationFilter
  }

  export type TeamsSoccerLeagueOrderByWithRelationInput = {
    id?: SortOrder
    soccerLeagueId?: SortOrderInput | SortOrder
    name?: SortOrder
    abr?: SortOrder
    logo?: SortOrderInput | SortOrder
    SoccerLeague?: SoccerLeagueOrderByWithRelationInput
    Players?: PlayersOrderByRelationAggregateInput
  }

  export type TeamsSoccerLeagueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamsSoccerLeagueWhereInput | TeamsSoccerLeagueWhereInput[]
    OR?: TeamsSoccerLeagueWhereInput[]
    NOT?: TeamsSoccerLeagueWhereInput | TeamsSoccerLeagueWhereInput[]
    soccerLeagueId?: IntNullableFilter<"TeamsSoccerLeague"> | number | null
    name?: StringFilter<"TeamsSoccerLeague"> | string
    abr?: StringFilter<"TeamsSoccerLeague"> | string
    logo?: StringNullableFilter<"TeamsSoccerLeague"> | string | null
    SoccerLeague?: XOR<SoccerLeagueNullableScalarRelationFilter, SoccerLeagueWhereInput> | null
    Players?: PlayersListRelationFilter
  }, "id">

  export type TeamsSoccerLeagueOrderByWithAggregationInput = {
    id?: SortOrder
    soccerLeagueId?: SortOrderInput | SortOrder
    name?: SortOrder
    abr?: SortOrder
    logo?: SortOrderInput | SortOrder
    _count?: TeamsSoccerLeagueCountOrderByAggregateInput
    _avg?: TeamsSoccerLeagueAvgOrderByAggregateInput
    _max?: TeamsSoccerLeagueMaxOrderByAggregateInput
    _min?: TeamsSoccerLeagueMinOrderByAggregateInput
    _sum?: TeamsSoccerLeagueSumOrderByAggregateInput
  }

  export type TeamsSoccerLeagueScalarWhereWithAggregatesInput = {
    AND?: TeamsSoccerLeagueScalarWhereWithAggregatesInput | TeamsSoccerLeagueScalarWhereWithAggregatesInput[]
    OR?: TeamsSoccerLeagueScalarWhereWithAggregatesInput[]
    NOT?: TeamsSoccerLeagueScalarWhereWithAggregatesInput | TeamsSoccerLeagueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeamsSoccerLeague"> | number
    soccerLeagueId?: IntNullableWithAggregatesFilter<"TeamsSoccerLeague"> | number | null
    name?: StringWithAggregatesFilter<"TeamsSoccerLeague"> | string
    abr?: StringWithAggregatesFilter<"TeamsSoccerLeague"> | string
    logo?: StringNullableWithAggregatesFilter<"TeamsSoccerLeague"> | string | null
  }

  export type PlayersWhereInput = {
    AND?: PlayersWhereInput | PlayersWhereInput[]
    OR?: PlayersWhereInput[]
    NOT?: PlayersWhereInput | PlayersWhereInput[]
    id?: IntFilter<"Players"> | number
    teamId?: IntNullableFilter<"Players"> | number | null
    name?: IntFilter<"Players"> | number
    TeamsSoccerLeague?: XOR<TeamsSoccerLeagueNullableScalarRelationFilter, TeamsSoccerLeagueWhereInput> | null
  }

  export type PlayersOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrderInput | SortOrder
    name?: SortOrder
    TeamsSoccerLeague?: TeamsSoccerLeagueOrderByWithRelationInput
  }

  export type PlayersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlayersWhereInput | PlayersWhereInput[]
    OR?: PlayersWhereInput[]
    NOT?: PlayersWhereInput | PlayersWhereInput[]
    teamId?: IntNullableFilter<"Players"> | number | null
    name?: IntFilter<"Players"> | number
    TeamsSoccerLeague?: XOR<TeamsSoccerLeagueNullableScalarRelationFilter, TeamsSoccerLeagueWhereInput> | null
  }, "id">

  export type PlayersOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrderInput | SortOrder
    name?: SortOrder
    _count?: PlayersCountOrderByAggregateInput
    _avg?: PlayersAvgOrderByAggregateInput
    _max?: PlayersMaxOrderByAggregateInput
    _min?: PlayersMinOrderByAggregateInput
    _sum?: PlayersSumOrderByAggregateInput
  }

  export type PlayersScalarWhereWithAggregatesInput = {
    AND?: PlayersScalarWhereWithAggregatesInput | PlayersScalarWhereWithAggregatesInput[]
    OR?: PlayersScalarWhereWithAggregatesInput[]
    NOT?: PlayersScalarWhereWithAggregatesInput | PlayersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Players"> | number
    teamId?: IntNullableWithAggregatesFilter<"Players"> | number | null
    name?: IntWithAggregatesFilter<"Players"> | number
  }

  export type UserCreateInput = {
    email: string
    name: string
    password: string
    soccerLeagues?: SoccerLeagueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    password: string
    soccerLeagues?: SoccerLeagueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    soccerLeagues?: SoccerLeagueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    soccerLeagues?: SoccerLeagueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type SoccerLeagueCreateInput = {
    name: string
    stage: number
    User?: UserCreateNestedOneWithoutSoccerLeaguesInput
    Teams?: TeamsSoccerLeagueCreateNestedManyWithoutSoccerLeagueInput
  }

  export type SoccerLeagueUncheckedCreateInput = {
    id?: number
    userId?: number | null
    name: string
    stage: number
    Teams?: TeamsSoccerLeagueUncheckedCreateNestedManyWithoutSoccerLeagueInput
  }

  export type SoccerLeagueUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneWithoutSoccerLeaguesNestedInput
    Teams?: TeamsSoccerLeagueUpdateManyWithoutSoccerLeagueNestedInput
  }

  export type SoccerLeagueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
    Teams?: TeamsSoccerLeagueUncheckedUpdateManyWithoutSoccerLeagueNestedInput
  }

  export type SoccerLeagueCreateManyInput = {
    id?: number
    userId?: number | null
    name: string
    stage: number
  }

  export type SoccerLeagueUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
  }

  export type SoccerLeagueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
  }

  export type TeamsSoccerLeagueCreateInput = {
    name: string
    abr: string
    logo?: string | null
    SoccerLeague?: SoccerLeagueCreateNestedOneWithoutTeamsInput
    Players?: PlayersCreateNestedManyWithoutTeamsSoccerLeagueInput
  }

  export type TeamsSoccerLeagueUncheckedCreateInput = {
    id?: number
    soccerLeagueId?: number | null
    name: string
    abr: string
    logo?: string | null
    Players?: PlayersUncheckedCreateNestedManyWithoutTeamsSoccerLeagueInput
  }

  export type TeamsSoccerLeagueUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    abr?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    SoccerLeague?: SoccerLeagueUpdateOneWithoutTeamsNestedInput
    Players?: PlayersUpdateManyWithoutTeamsSoccerLeagueNestedInput
  }

  export type TeamsSoccerLeagueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    soccerLeagueId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    abr?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    Players?: PlayersUncheckedUpdateManyWithoutTeamsSoccerLeagueNestedInput
  }

  export type TeamsSoccerLeagueCreateManyInput = {
    id?: number
    soccerLeagueId?: number | null
    name: string
    abr: string
    logo?: string | null
  }

  export type TeamsSoccerLeagueUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    abr?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamsSoccerLeagueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    soccerLeagueId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    abr?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayersCreateInput = {
    name: number
    TeamsSoccerLeague?: TeamsSoccerLeagueCreateNestedOneWithoutPlayersInput
  }

  export type PlayersUncheckedCreateInput = {
    id?: number
    teamId?: number | null
    name: number
  }

  export type PlayersUpdateInput = {
    name?: IntFieldUpdateOperationsInput | number
    TeamsSoccerLeague?: TeamsSoccerLeagueUpdateOneWithoutPlayersNestedInput
  }

  export type PlayersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: IntFieldUpdateOperationsInput | number
  }

  export type PlayersCreateManyInput = {
    id?: number
    teamId?: number | null
    name: number
  }

  export type PlayersUpdateManyMutationInput = {
    name?: IntFieldUpdateOperationsInput | number
  }

  export type PlayersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SoccerLeagueListRelationFilter = {
    every?: SoccerLeagueWhereInput
    some?: SoccerLeagueWhereInput
    none?: SoccerLeagueWhereInput
  }

  export type SoccerLeagueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TeamsSoccerLeagueListRelationFilter = {
    every?: TeamsSoccerLeagueWhereInput
    some?: TeamsSoccerLeagueWhereInput
    none?: TeamsSoccerLeagueWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TeamsSoccerLeagueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SoccerLeagueCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    stage?: SortOrder
  }

  export type SoccerLeagueAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stage?: SortOrder
  }

  export type SoccerLeagueMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    stage?: SortOrder
  }

  export type SoccerLeagueMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    stage?: SortOrder
  }

  export type SoccerLeagueSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stage?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SoccerLeagueNullableScalarRelationFilter = {
    is?: SoccerLeagueWhereInput | null
    isNot?: SoccerLeagueWhereInput | null
  }

  export type PlayersListRelationFilter = {
    every?: PlayersWhereInput
    some?: PlayersWhereInput
    none?: PlayersWhereInput
  }

  export type PlayersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamsSoccerLeagueCountOrderByAggregateInput = {
    id?: SortOrder
    soccerLeagueId?: SortOrder
    name?: SortOrder
    abr?: SortOrder
    logo?: SortOrder
  }

  export type TeamsSoccerLeagueAvgOrderByAggregateInput = {
    id?: SortOrder
    soccerLeagueId?: SortOrder
  }

  export type TeamsSoccerLeagueMaxOrderByAggregateInput = {
    id?: SortOrder
    soccerLeagueId?: SortOrder
    name?: SortOrder
    abr?: SortOrder
    logo?: SortOrder
  }

  export type TeamsSoccerLeagueMinOrderByAggregateInput = {
    id?: SortOrder
    soccerLeagueId?: SortOrder
    name?: SortOrder
    abr?: SortOrder
    logo?: SortOrder
  }

  export type TeamsSoccerLeagueSumOrderByAggregateInput = {
    id?: SortOrder
    soccerLeagueId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TeamsSoccerLeagueNullableScalarRelationFilter = {
    is?: TeamsSoccerLeagueWhereInput | null
    isNot?: TeamsSoccerLeagueWhereInput | null
  }

  export type PlayersCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    name?: SortOrder
  }

  export type PlayersAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    name?: SortOrder
  }

  export type PlayersMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    name?: SortOrder
  }

  export type PlayersMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    name?: SortOrder
  }

  export type PlayersSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    name?: SortOrder
  }

  export type SoccerLeagueCreateNestedManyWithoutUserInput = {
    create?: XOR<SoccerLeagueCreateWithoutUserInput, SoccerLeagueUncheckedCreateWithoutUserInput> | SoccerLeagueCreateWithoutUserInput[] | SoccerLeagueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SoccerLeagueCreateOrConnectWithoutUserInput | SoccerLeagueCreateOrConnectWithoutUserInput[]
    createMany?: SoccerLeagueCreateManyUserInputEnvelope
    connect?: SoccerLeagueWhereUniqueInput | SoccerLeagueWhereUniqueInput[]
  }

  export type SoccerLeagueUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SoccerLeagueCreateWithoutUserInput, SoccerLeagueUncheckedCreateWithoutUserInput> | SoccerLeagueCreateWithoutUserInput[] | SoccerLeagueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SoccerLeagueCreateOrConnectWithoutUserInput | SoccerLeagueCreateOrConnectWithoutUserInput[]
    createMany?: SoccerLeagueCreateManyUserInputEnvelope
    connect?: SoccerLeagueWhereUniqueInput | SoccerLeagueWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SoccerLeagueUpdateManyWithoutUserNestedInput = {
    create?: XOR<SoccerLeagueCreateWithoutUserInput, SoccerLeagueUncheckedCreateWithoutUserInput> | SoccerLeagueCreateWithoutUserInput[] | SoccerLeagueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SoccerLeagueCreateOrConnectWithoutUserInput | SoccerLeagueCreateOrConnectWithoutUserInput[]
    upsert?: SoccerLeagueUpsertWithWhereUniqueWithoutUserInput | SoccerLeagueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SoccerLeagueCreateManyUserInputEnvelope
    set?: SoccerLeagueWhereUniqueInput | SoccerLeagueWhereUniqueInput[]
    disconnect?: SoccerLeagueWhereUniqueInput | SoccerLeagueWhereUniqueInput[]
    delete?: SoccerLeagueWhereUniqueInput | SoccerLeagueWhereUniqueInput[]
    connect?: SoccerLeagueWhereUniqueInput | SoccerLeagueWhereUniqueInput[]
    update?: SoccerLeagueUpdateWithWhereUniqueWithoutUserInput | SoccerLeagueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SoccerLeagueUpdateManyWithWhereWithoutUserInput | SoccerLeagueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SoccerLeagueScalarWhereInput | SoccerLeagueScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SoccerLeagueUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SoccerLeagueCreateWithoutUserInput, SoccerLeagueUncheckedCreateWithoutUserInput> | SoccerLeagueCreateWithoutUserInput[] | SoccerLeagueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SoccerLeagueCreateOrConnectWithoutUserInput | SoccerLeagueCreateOrConnectWithoutUserInput[]
    upsert?: SoccerLeagueUpsertWithWhereUniqueWithoutUserInput | SoccerLeagueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SoccerLeagueCreateManyUserInputEnvelope
    set?: SoccerLeagueWhereUniqueInput | SoccerLeagueWhereUniqueInput[]
    disconnect?: SoccerLeagueWhereUniqueInput | SoccerLeagueWhereUniqueInput[]
    delete?: SoccerLeagueWhereUniqueInput | SoccerLeagueWhereUniqueInput[]
    connect?: SoccerLeagueWhereUniqueInput | SoccerLeagueWhereUniqueInput[]
    update?: SoccerLeagueUpdateWithWhereUniqueWithoutUserInput | SoccerLeagueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SoccerLeagueUpdateManyWithWhereWithoutUserInput | SoccerLeagueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SoccerLeagueScalarWhereInput | SoccerLeagueScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSoccerLeaguesInput = {
    create?: XOR<UserCreateWithoutSoccerLeaguesInput, UserUncheckedCreateWithoutSoccerLeaguesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSoccerLeaguesInput
    connect?: UserWhereUniqueInput
  }

  export type TeamsSoccerLeagueCreateNestedManyWithoutSoccerLeagueInput = {
    create?: XOR<TeamsSoccerLeagueCreateWithoutSoccerLeagueInput, TeamsSoccerLeagueUncheckedCreateWithoutSoccerLeagueInput> | TeamsSoccerLeagueCreateWithoutSoccerLeagueInput[] | TeamsSoccerLeagueUncheckedCreateWithoutSoccerLeagueInput[]
    connectOrCreate?: TeamsSoccerLeagueCreateOrConnectWithoutSoccerLeagueInput | TeamsSoccerLeagueCreateOrConnectWithoutSoccerLeagueInput[]
    createMany?: TeamsSoccerLeagueCreateManySoccerLeagueInputEnvelope
    connect?: TeamsSoccerLeagueWhereUniqueInput | TeamsSoccerLeagueWhereUniqueInput[]
  }

  export type TeamsSoccerLeagueUncheckedCreateNestedManyWithoutSoccerLeagueInput = {
    create?: XOR<TeamsSoccerLeagueCreateWithoutSoccerLeagueInput, TeamsSoccerLeagueUncheckedCreateWithoutSoccerLeagueInput> | TeamsSoccerLeagueCreateWithoutSoccerLeagueInput[] | TeamsSoccerLeagueUncheckedCreateWithoutSoccerLeagueInput[]
    connectOrCreate?: TeamsSoccerLeagueCreateOrConnectWithoutSoccerLeagueInput | TeamsSoccerLeagueCreateOrConnectWithoutSoccerLeagueInput[]
    createMany?: TeamsSoccerLeagueCreateManySoccerLeagueInputEnvelope
    connect?: TeamsSoccerLeagueWhereUniqueInput | TeamsSoccerLeagueWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutSoccerLeaguesNestedInput = {
    create?: XOR<UserCreateWithoutSoccerLeaguesInput, UserUncheckedCreateWithoutSoccerLeaguesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSoccerLeaguesInput
    upsert?: UserUpsertWithoutSoccerLeaguesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSoccerLeaguesInput, UserUpdateWithoutSoccerLeaguesInput>, UserUncheckedUpdateWithoutSoccerLeaguesInput>
  }

  export type TeamsSoccerLeagueUpdateManyWithoutSoccerLeagueNestedInput = {
    create?: XOR<TeamsSoccerLeagueCreateWithoutSoccerLeagueInput, TeamsSoccerLeagueUncheckedCreateWithoutSoccerLeagueInput> | TeamsSoccerLeagueCreateWithoutSoccerLeagueInput[] | TeamsSoccerLeagueUncheckedCreateWithoutSoccerLeagueInput[]
    connectOrCreate?: TeamsSoccerLeagueCreateOrConnectWithoutSoccerLeagueInput | TeamsSoccerLeagueCreateOrConnectWithoutSoccerLeagueInput[]
    upsert?: TeamsSoccerLeagueUpsertWithWhereUniqueWithoutSoccerLeagueInput | TeamsSoccerLeagueUpsertWithWhereUniqueWithoutSoccerLeagueInput[]
    createMany?: TeamsSoccerLeagueCreateManySoccerLeagueInputEnvelope
    set?: TeamsSoccerLeagueWhereUniqueInput | TeamsSoccerLeagueWhereUniqueInput[]
    disconnect?: TeamsSoccerLeagueWhereUniqueInput | TeamsSoccerLeagueWhereUniqueInput[]
    delete?: TeamsSoccerLeagueWhereUniqueInput | TeamsSoccerLeagueWhereUniqueInput[]
    connect?: TeamsSoccerLeagueWhereUniqueInput | TeamsSoccerLeagueWhereUniqueInput[]
    update?: TeamsSoccerLeagueUpdateWithWhereUniqueWithoutSoccerLeagueInput | TeamsSoccerLeagueUpdateWithWhereUniqueWithoutSoccerLeagueInput[]
    updateMany?: TeamsSoccerLeagueUpdateManyWithWhereWithoutSoccerLeagueInput | TeamsSoccerLeagueUpdateManyWithWhereWithoutSoccerLeagueInput[]
    deleteMany?: TeamsSoccerLeagueScalarWhereInput | TeamsSoccerLeagueScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeamsSoccerLeagueUncheckedUpdateManyWithoutSoccerLeagueNestedInput = {
    create?: XOR<TeamsSoccerLeagueCreateWithoutSoccerLeagueInput, TeamsSoccerLeagueUncheckedCreateWithoutSoccerLeagueInput> | TeamsSoccerLeagueCreateWithoutSoccerLeagueInput[] | TeamsSoccerLeagueUncheckedCreateWithoutSoccerLeagueInput[]
    connectOrCreate?: TeamsSoccerLeagueCreateOrConnectWithoutSoccerLeagueInput | TeamsSoccerLeagueCreateOrConnectWithoutSoccerLeagueInput[]
    upsert?: TeamsSoccerLeagueUpsertWithWhereUniqueWithoutSoccerLeagueInput | TeamsSoccerLeagueUpsertWithWhereUniqueWithoutSoccerLeagueInput[]
    createMany?: TeamsSoccerLeagueCreateManySoccerLeagueInputEnvelope
    set?: TeamsSoccerLeagueWhereUniqueInput | TeamsSoccerLeagueWhereUniqueInput[]
    disconnect?: TeamsSoccerLeagueWhereUniqueInput | TeamsSoccerLeagueWhereUniqueInput[]
    delete?: TeamsSoccerLeagueWhereUniqueInput | TeamsSoccerLeagueWhereUniqueInput[]
    connect?: TeamsSoccerLeagueWhereUniqueInput | TeamsSoccerLeagueWhereUniqueInput[]
    update?: TeamsSoccerLeagueUpdateWithWhereUniqueWithoutSoccerLeagueInput | TeamsSoccerLeagueUpdateWithWhereUniqueWithoutSoccerLeagueInput[]
    updateMany?: TeamsSoccerLeagueUpdateManyWithWhereWithoutSoccerLeagueInput | TeamsSoccerLeagueUpdateManyWithWhereWithoutSoccerLeagueInput[]
    deleteMany?: TeamsSoccerLeagueScalarWhereInput | TeamsSoccerLeagueScalarWhereInput[]
  }

  export type SoccerLeagueCreateNestedOneWithoutTeamsInput = {
    create?: XOR<SoccerLeagueCreateWithoutTeamsInput, SoccerLeagueUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: SoccerLeagueCreateOrConnectWithoutTeamsInput
    connect?: SoccerLeagueWhereUniqueInput
  }

  export type PlayersCreateNestedManyWithoutTeamsSoccerLeagueInput = {
    create?: XOR<PlayersCreateWithoutTeamsSoccerLeagueInput, PlayersUncheckedCreateWithoutTeamsSoccerLeagueInput> | PlayersCreateWithoutTeamsSoccerLeagueInput[] | PlayersUncheckedCreateWithoutTeamsSoccerLeagueInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutTeamsSoccerLeagueInput | PlayersCreateOrConnectWithoutTeamsSoccerLeagueInput[]
    createMany?: PlayersCreateManyTeamsSoccerLeagueInputEnvelope
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
  }

  export type PlayersUncheckedCreateNestedManyWithoutTeamsSoccerLeagueInput = {
    create?: XOR<PlayersCreateWithoutTeamsSoccerLeagueInput, PlayersUncheckedCreateWithoutTeamsSoccerLeagueInput> | PlayersCreateWithoutTeamsSoccerLeagueInput[] | PlayersUncheckedCreateWithoutTeamsSoccerLeagueInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutTeamsSoccerLeagueInput | PlayersCreateOrConnectWithoutTeamsSoccerLeagueInput[]
    createMany?: PlayersCreateManyTeamsSoccerLeagueInputEnvelope
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SoccerLeagueUpdateOneWithoutTeamsNestedInput = {
    create?: XOR<SoccerLeagueCreateWithoutTeamsInput, SoccerLeagueUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: SoccerLeagueCreateOrConnectWithoutTeamsInput
    upsert?: SoccerLeagueUpsertWithoutTeamsInput
    disconnect?: SoccerLeagueWhereInput | boolean
    delete?: SoccerLeagueWhereInput | boolean
    connect?: SoccerLeagueWhereUniqueInput
    update?: XOR<XOR<SoccerLeagueUpdateToOneWithWhereWithoutTeamsInput, SoccerLeagueUpdateWithoutTeamsInput>, SoccerLeagueUncheckedUpdateWithoutTeamsInput>
  }

  export type PlayersUpdateManyWithoutTeamsSoccerLeagueNestedInput = {
    create?: XOR<PlayersCreateWithoutTeamsSoccerLeagueInput, PlayersUncheckedCreateWithoutTeamsSoccerLeagueInput> | PlayersCreateWithoutTeamsSoccerLeagueInput[] | PlayersUncheckedCreateWithoutTeamsSoccerLeagueInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutTeamsSoccerLeagueInput | PlayersCreateOrConnectWithoutTeamsSoccerLeagueInput[]
    upsert?: PlayersUpsertWithWhereUniqueWithoutTeamsSoccerLeagueInput | PlayersUpsertWithWhereUniqueWithoutTeamsSoccerLeagueInput[]
    createMany?: PlayersCreateManyTeamsSoccerLeagueInputEnvelope
    set?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    disconnect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    delete?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    update?: PlayersUpdateWithWhereUniqueWithoutTeamsSoccerLeagueInput | PlayersUpdateWithWhereUniqueWithoutTeamsSoccerLeagueInput[]
    updateMany?: PlayersUpdateManyWithWhereWithoutTeamsSoccerLeagueInput | PlayersUpdateManyWithWhereWithoutTeamsSoccerLeagueInput[]
    deleteMany?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
  }

  export type PlayersUncheckedUpdateManyWithoutTeamsSoccerLeagueNestedInput = {
    create?: XOR<PlayersCreateWithoutTeamsSoccerLeagueInput, PlayersUncheckedCreateWithoutTeamsSoccerLeagueInput> | PlayersCreateWithoutTeamsSoccerLeagueInput[] | PlayersUncheckedCreateWithoutTeamsSoccerLeagueInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutTeamsSoccerLeagueInput | PlayersCreateOrConnectWithoutTeamsSoccerLeagueInput[]
    upsert?: PlayersUpsertWithWhereUniqueWithoutTeamsSoccerLeagueInput | PlayersUpsertWithWhereUniqueWithoutTeamsSoccerLeagueInput[]
    createMany?: PlayersCreateManyTeamsSoccerLeagueInputEnvelope
    set?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    disconnect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    delete?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    update?: PlayersUpdateWithWhereUniqueWithoutTeamsSoccerLeagueInput | PlayersUpdateWithWhereUniqueWithoutTeamsSoccerLeagueInput[]
    updateMany?: PlayersUpdateManyWithWhereWithoutTeamsSoccerLeagueInput | PlayersUpdateManyWithWhereWithoutTeamsSoccerLeagueInput[]
    deleteMany?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
  }

  export type TeamsSoccerLeagueCreateNestedOneWithoutPlayersInput = {
    create?: XOR<TeamsSoccerLeagueCreateWithoutPlayersInput, TeamsSoccerLeagueUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamsSoccerLeagueCreateOrConnectWithoutPlayersInput
    connect?: TeamsSoccerLeagueWhereUniqueInput
  }

  export type TeamsSoccerLeagueUpdateOneWithoutPlayersNestedInput = {
    create?: XOR<TeamsSoccerLeagueCreateWithoutPlayersInput, TeamsSoccerLeagueUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamsSoccerLeagueCreateOrConnectWithoutPlayersInput
    upsert?: TeamsSoccerLeagueUpsertWithoutPlayersInput
    disconnect?: TeamsSoccerLeagueWhereInput | boolean
    delete?: TeamsSoccerLeagueWhereInput | boolean
    connect?: TeamsSoccerLeagueWhereUniqueInput
    update?: XOR<XOR<TeamsSoccerLeagueUpdateToOneWithWhereWithoutPlayersInput, TeamsSoccerLeagueUpdateWithoutPlayersInput>, TeamsSoccerLeagueUncheckedUpdateWithoutPlayersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SoccerLeagueCreateWithoutUserInput = {
    name: string
    stage: number
    Teams?: TeamsSoccerLeagueCreateNestedManyWithoutSoccerLeagueInput
  }

  export type SoccerLeagueUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    stage: number
    Teams?: TeamsSoccerLeagueUncheckedCreateNestedManyWithoutSoccerLeagueInput
  }

  export type SoccerLeagueCreateOrConnectWithoutUserInput = {
    where: SoccerLeagueWhereUniqueInput
    create: XOR<SoccerLeagueCreateWithoutUserInput, SoccerLeagueUncheckedCreateWithoutUserInput>
  }

  export type SoccerLeagueCreateManyUserInputEnvelope = {
    data: SoccerLeagueCreateManyUserInput | SoccerLeagueCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SoccerLeagueUpsertWithWhereUniqueWithoutUserInput = {
    where: SoccerLeagueWhereUniqueInput
    update: XOR<SoccerLeagueUpdateWithoutUserInput, SoccerLeagueUncheckedUpdateWithoutUserInput>
    create: XOR<SoccerLeagueCreateWithoutUserInput, SoccerLeagueUncheckedCreateWithoutUserInput>
  }

  export type SoccerLeagueUpdateWithWhereUniqueWithoutUserInput = {
    where: SoccerLeagueWhereUniqueInput
    data: XOR<SoccerLeagueUpdateWithoutUserInput, SoccerLeagueUncheckedUpdateWithoutUserInput>
  }

  export type SoccerLeagueUpdateManyWithWhereWithoutUserInput = {
    where: SoccerLeagueScalarWhereInput
    data: XOR<SoccerLeagueUpdateManyMutationInput, SoccerLeagueUncheckedUpdateManyWithoutUserInput>
  }

  export type SoccerLeagueScalarWhereInput = {
    AND?: SoccerLeagueScalarWhereInput | SoccerLeagueScalarWhereInput[]
    OR?: SoccerLeagueScalarWhereInput[]
    NOT?: SoccerLeagueScalarWhereInput | SoccerLeagueScalarWhereInput[]
    id?: IntFilter<"SoccerLeague"> | number
    userId?: IntNullableFilter<"SoccerLeague"> | number | null
    name?: StringFilter<"SoccerLeague"> | string
    stage?: IntFilter<"SoccerLeague"> | number
  }

  export type UserCreateWithoutSoccerLeaguesInput = {
    email: string
    name: string
    password: string
  }

  export type UserUncheckedCreateWithoutSoccerLeaguesInput = {
    id?: number
    email: string
    name: string
    password: string
  }

  export type UserCreateOrConnectWithoutSoccerLeaguesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSoccerLeaguesInput, UserUncheckedCreateWithoutSoccerLeaguesInput>
  }

  export type TeamsSoccerLeagueCreateWithoutSoccerLeagueInput = {
    name: string
    abr: string
    logo?: string | null
    Players?: PlayersCreateNestedManyWithoutTeamsSoccerLeagueInput
  }

  export type TeamsSoccerLeagueUncheckedCreateWithoutSoccerLeagueInput = {
    id?: number
    name: string
    abr: string
    logo?: string | null
    Players?: PlayersUncheckedCreateNestedManyWithoutTeamsSoccerLeagueInput
  }

  export type TeamsSoccerLeagueCreateOrConnectWithoutSoccerLeagueInput = {
    where: TeamsSoccerLeagueWhereUniqueInput
    create: XOR<TeamsSoccerLeagueCreateWithoutSoccerLeagueInput, TeamsSoccerLeagueUncheckedCreateWithoutSoccerLeagueInput>
  }

  export type TeamsSoccerLeagueCreateManySoccerLeagueInputEnvelope = {
    data: TeamsSoccerLeagueCreateManySoccerLeagueInput | TeamsSoccerLeagueCreateManySoccerLeagueInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSoccerLeaguesInput = {
    update: XOR<UserUpdateWithoutSoccerLeaguesInput, UserUncheckedUpdateWithoutSoccerLeaguesInput>
    create: XOR<UserCreateWithoutSoccerLeaguesInput, UserUncheckedCreateWithoutSoccerLeaguesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSoccerLeaguesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSoccerLeaguesInput, UserUncheckedUpdateWithoutSoccerLeaguesInput>
  }

  export type UserUpdateWithoutSoccerLeaguesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutSoccerLeaguesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TeamsSoccerLeagueUpsertWithWhereUniqueWithoutSoccerLeagueInput = {
    where: TeamsSoccerLeagueWhereUniqueInput
    update: XOR<TeamsSoccerLeagueUpdateWithoutSoccerLeagueInput, TeamsSoccerLeagueUncheckedUpdateWithoutSoccerLeagueInput>
    create: XOR<TeamsSoccerLeagueCreateWithoutSoccerLeagueInput, TeamsSoccerLeagueUncheckedCreateWithoutSoccerLeagueInput>
  }

  export type TeamsSoccerLeagueUpdateWithWhereUniqueWithoutSoccerLeagueInput = {
    where: TeamsSoccerLeagueWhereUniqueInput
    data: XOR<TeamsSoccerLeagueUpdateWithoutSoccerLeagueInput, TeamsSoccerLeagueUncheckedUpdateWithoutSoccerLeagueInput>
  }

  export type TeamsSoccerLeagueUpdateManyWithWhereWithoutSoccerLeagueInput = {
    where: TeamsSoccerLeagueScalarWhereInput
    data: XOR<TeamsSoccerLeagueUpdateManyMutationInput, TeamsSoccerLeagueUncheckedUpdateManyWithoutSoccerLeagueInput>
  }

  export type TeamsSoccerLeagueScalarWhereInput = {
    AND?: TeamsSoccerLeagueScalarWhereInput | TeamsSoccerLeagueScalarWhereInput[]
    OR?: TeamsSoccerLeagueScalarWhereInput[]
    NOT?: TeamsSoccerLeagueScalarWhereInput | TeamsSoccerLeagueScalarWhereInput[]
    id?: IntFilter<"TeamsSoccerLeague"> | number
    soccerLeagueId?: IntNullableFilter<"TeamsSoccerLeague"> | number | null
    name?: StringFilter<"TeamsSoccerLeague"> | string
    abr?: StringFilter<"TeamsSoccerLeague"> | string
    logo?: StringNullableFilter<"TeamsSoccerLeague"> | string | null
  }

  export type SoccerLeagueCreateWithoutTeamsInput = {
    name: string
    stage: number
    User?: UserCreateNestedOneWithoutSoccerLeaguesInput
  }

  export type SoccerLeagueUncheckedCreateWithoutTeamsInput = {
    id?: number
    userId?: number | null
    name: string
    stage: number
  }

  export type SoccerLeagueCreateOrConnectWithoutTeamsInput = {
    where: SoccerLeagueWhereUniqueInput
    create: XOR<SoccerLeagueCreateWithoutTeamsInput, SoccerLeagueUncheckedCreateWithoutTeamsInput>
  }

  export type PlayersCreateWithoutTeamsSoccerLeagueInput = {
    name: number
  }

  export type PlayersUncheckedCreateWithoutTeamsSoccerLeagueInput = {
    id?: number
    name: number
  }

  export type PlayersCreateOrConnectWithoutTeamsSoccerLeagueInput = {
    where: PlayersWhereUniqueInput
    create: XOR<PlayersCreateWithoutTeamsSoccerLeagueInput, PlayersUncheckedCreateWithoutTeamsSoccerLeagueInput>
  }

  export type PlayersCreateManyTeamsSoccerLeagueInputEnvelope = {
    data: PlayersCreateManyTeamsSoccerLeagueInput | PlayersCreateManyTeamsSoccerLeagueInput[]
    skipDuplicates?: boolean
  }

  export type SoccerLeagueUpsertWithoutTeamsInput = {
    update: XOR<SoccerLeagueUpdateWithoutTeamsInput, SoccerLeagueUncheckedUpdateWithoutTeamsInput>
    create: XOR<SoccerLeagueCreateWithoutTeamsInput, SoccerLeagueUncheckedCreateWithoutTeamsInput>
    where?: SoccerLeagueWhereInput
  }

  export type SoccerLeagueUpdateToOneWithWhereWithoutTeamsInput = {
    where?: SoccerLeagueWhereInput
    data: XOR<SoccerLeagueUpdateWithoutTeamsInput, SoccerLeagueUncheckedUpdateWithoutTeamsInput>
  }

  export type SoccerLeagueUpdateWithoutTeamsInput = {
    name?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneWithoutSoccerLeaguesNestedInput
  }

  export type SoccerLeagueUncheckedUpdateWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
  }

  export type PlayersUpsertWithWhereUniqueWithoutTeamsSoccerLeagueInput = {
    where: PlayersWhereUniqueInput
    update: XOR<PlayersUpdateWithoutTeamsSoccerLeagueInput, PlayersUncheckedUpdateWithoutTeamsSoccerLeagueInput>
    create: XOR<PlayersCreateWithoutTeamsSoccerLeagueInput, PlayersUncheckedCreateWithoutTeamsSoccerLeagueInput>
  }

  export type PlayersUpdateWithWhereUniqueWithoutTeamsSoccerLeagueInput = {
    where: PlayersWhereUniqueInput
    data: XOR<PlayersUpdateWithoutTeamsSoccerLeagueInput, PlayersUncheckedUpdateWithoutTeamsSoccerLeagueInput>
  }

  export type PlayersUpdateManyWithWhereWithoutTeamsSoccerLeagueInput = {
    where: PlayersScalarWhereInput
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyWithoutTeamsSoccerLeagueInput>
  }

  export type PlayersScalarWhereInput = {
    AND?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
    OR?: PlayersScalarWhereInput[]
    NOT?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
    id?: IntFilter<"Players"> | number
    teamId?: IntNullableFilter<"Players"> | number | null
    name?: IntFilter<"Players"> | number
  }

  export type TeamsSoccerLeagueCreateWithoutPlayersInput = {
    name: string
    abr: string
    logo?: string | null
    SoccerLeague?: SoccerLeagueCreateNestedOneWithoutTeamsInput
  }

  export type TeamsSoccerLeagueUncheckedCreateWithoutPlayersInput = {
    id?: number
    soccerLeagueId?: number | null
    name: string
    abr: string
    logo?: string | null
  }

  export type TeamsSoccerLeagueCreateOrConnectWithoutPlayersInput = {
    where: TeamsSoccerLeagueWhereUniqueInput
    create: XOR<TeamsSoccerLeagueCreateWithoutPlayersInput, TeamsSoccerLeagueUncheckedCreateWithoutPlayersInput>
  }

  export type TeamsSoccerLeagueUpsertWithoutPlayersInput = {
    update: XOR<TeamsSoccerLeagueUpdateWithoutPlayersInput, TeamsSoccerLeagueUncheckedUpdateWithoutPlayersInput>
    create: XOR<TeamsSoccerLeagueCreateWithoutPlayersInput, TeamsSoccerLeagueUncheckedCreateWithoutPlayersInput>
    where?: TeamsSoccerLeagueWhereInput
  }

  export type TeamsSoccerLeagueUpdateToOneWithWhereWithoutPlayersInput = {
    where?: TeamsSoccerLeagueWhereInput
    data: XOR<TeamsSoccerLeagueUpdateWithoutPlayersInput, TeamsSoccerLeagueUncheckedUpdateWithoutPlayersInput>
  }

  export type TeamsSoccerLeagueUpdateWithoutPlayersInput = {
    name?: StringFieldUpdateOperationsInput | string
    abr?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    SoccerLeague?: SoccerLeagueUpdateOneWithoutTeamsNestedInput
  }

  export type TeamsSoccerLeagueUncheckedUpdateWithoutPlayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    soccerLeagueId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    abr?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SoccerLeagueCreateManyUserInput = {
    id?: number
    name: string
    stage: number
  }

  export type SoccerLeagueUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
    Teams?: TeamsSoccerLeagueUpdateManyWithoutSoccerLeagueNestedInput
  }

  export type SoccerLeagueUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
    Teams?: TeamsSoccerLeagueUncheckedUpdateManyWithoutSoccerLeagueNestedInput
  }

  export type SoccerLeagueUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
  }

  export type TeamsSoccerLeagueCreateManySoccerLeagueInput = {
    id?: number
    name: string
    abr: string
    logo?: string | null
  }

  export type TeamsSoccerLeagueUpdateWithoutSoccerLeagueInput = {
    name?: StringFieldUpdateOperationsInput | string
    abr?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    Players?: PlayersUpdateManyWithoutTeamsSoccerLeagueNestedInput
  }

  export type TeamsSoccerLeagueUncheckedUpdateWithoutSoccerLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abr?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    Players?: PlayersUncheckedUpdateManyWithoutTeamsSoccerLeagueNestedInput
  }

  export type TeamsSoccerLeagueUncheckedUpdateManyWithoutSoccerLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abr?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayersCreateManyTeamsSoccerLeagueInput = {
    id?: number
    name: number
  }

  export type PlayersUpdateWithoutTeamsSoccerLeagueInput = {
    name?: IntFieldUpdateOperationsInput | number
  }

  export type PlayersUncheckedUpdateWithoutTeamsSoccerLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: IntFieldUpdateOperationsInput | number
  }

  export type PlayersUncheckedUpdateManyWithoutTeamsSoccerLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}