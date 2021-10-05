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
exports.AggregateSnippet = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SnippetAvgAggregate_1 = require("../outputs/SnippetAvgAggregate");
const SnippetCountAggregate_1 = require("../outputs/SnippetCountAggregate");
const SnippetMaxAggregate_1 = require("../outputs/SnippetMaxAggregate");
const SnippetMinAggregate_1 = require("../outputs/SnippetMinAggregate");
const SnippetSumAggregate_1 = require("../outputs/SnippetSumAggregate");
let AggregateSnippet = class AggregateSnippet {
};
__decorate([
    TypeGraphQL.Field(_type => SnippetCountAggregate_1.SnippetCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", SnippetCountAggregate_1.SnippetCountAggregate)
], AggregateSnippet.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SnippetAvgAggregate_1.SnippetAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", SnippetAvgAggregate_1.SnippetAvgAggregate)
], AggregateSnippet.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => SnippetSumAggregate_1.SnippetSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", SnippetSumAggregate_1.SnippetSumAggregate)
], AggregateSnippet.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => SnippetMinAggregate_1.SnippetMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", SnippetMinAggregate_1.SnippetMinAggregate)
], AggregateSnippet.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SnippetMaxAggregate_1.SnippetMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", SnippetMaxAggregate_1.SnippetMaxAggregate)
], AggregateSnippet.prototype, "_max", void 0);
AggregateSnippet = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateSnippet);
exports.AggregateSnippet = AggregateSnippet;
