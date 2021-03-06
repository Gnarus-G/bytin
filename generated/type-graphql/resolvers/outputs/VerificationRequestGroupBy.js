"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationRequestGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const VerificationRequestAvgAggregate_1 = require("../outputs/VerificationRequestAvgAggregate");
const VerificationRequestCountAggregate_1 = require("../outputs/VerificationRequestCountAggregate");
const VerificationRequestMaxAggregate_1 = require("../outputs/VerificationRequestMaxAggregate");
const VerificationRequestMinAggregate_1 = require("../outputs/VerificationRequestMinAggregate");
const VerificationRequestSumAggregate_1 = require("../outputs/VerificationRequestSumAggregate");
let VerificationRequestGroupBy = class VerificationRequestGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], VerificationRequestGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], VerificationRequestGroupBy.prototype, "identifier", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], VerificationRequestGroupBy.prototype, "token", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], VerificationRequestGroupBy.prototype, "expires", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], VerificationRequestGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], VerificationRequestGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => VerificationRequestCountAggregate_1.VerificationRequestCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", VerificationRequestCountAggregate_1.VerificationRequestCountAggregate)
], VerificationRequestGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => VerificationRequestAvgAggregate_1.VerificationRequestAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", VerificationRequestAvgAggregate_1.VerificationRequestAvgAggregate)
], VerificationRequestGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => VerificationRequestSumAggregate_1.VerificationRequestSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", VerificationRequestSumAggregate_1.VerificationRequestSumAggregate)
], VerificationRequestGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => VerificationRequestMinAggregate_1.VerificationRequestMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", VerificationRequestMinAggregate_1.VerificationRequestMinAggregate)
], VerificationRequestGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => VerificationRequestMaxAggregate_1.VerificationRequestMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", VerificationRequestMaxAggregate_1.VerificationRequestMaxAggregate)
], VerificationRequestGroupBy.prototype, "_max", void 0);
VerificationRequestGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], VerificationRequestGroupBy);
exports.VerificationRequestGroupBy = VerificationRequestGroupBy;
