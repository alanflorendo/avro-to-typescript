/// <reference types="node" />
import { Type } from "avsc";
import { AvroRecord } from "./AvroRecord";
export declare abstract class BaseAvroRecord implements AvroRecord {
    static readonly subject: string;
    static readonly schema: {};
    static getTypeForSchema(schema: any): Type;
    static createTypeResolver(baseType: Type, newType: Type): Type;
    protected static internalDeserialize<T extends BaseAvroRecord>(buffer: Buffer, newSchema?: object): any;
    loadValuesFromType(type: Type): void;
    abstract schema(): any;
    abstract subject(): string;
    serialize(): Buffer;
    protected transformation(): object;
    private loadObjectValues;
}
