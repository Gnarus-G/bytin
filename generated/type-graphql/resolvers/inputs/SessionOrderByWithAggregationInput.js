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
exports.SessionOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SessionAvgOrderByAggregateInput_1 = require("../inputs/SessionAvgOrderByAggregateInput");
const SessionCountOrderByAggregateInput_1 = require("../inputs/SessionCountOrderByAggregateInput");
const SessionMaxOrderByAggregateInput_1 = require("../inputs/SessionMaxOrderByAggregateInput");
const SessionMinOrderByAggregateInput_1 = require("../inputs/SessionMinOrderByAggregateInput");
const SessionSumOrderByAggregateInput_1 = require("../inputs/SessionSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SessionOrderByWithAggregationInput = class SessionOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SessionOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SessionOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SessionOrderByWithAggregationInput.prototype, "expires", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SessionOrderByWithAggregationInput.prototype, "sessionToken", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SessionOrderByWithAggregationInput.prototype, "accessToken", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SessionOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SessionOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SessionCountOrderByAggregateInput_1.SessionCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SessionCountOrderByAggregateInput_1.SessionCountOrderByAggregateInput)
], SessionOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SessionAvgOrderByAggregateInput_1.SessionAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SessionAvgOrderByAggregateInput_1.SessionAvgOrderByAggregateInput)
], SessionOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => SessionMaxOrderByAggregateInput_1.SessionMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SessionMaxOrderByAggregateInput_1.SessionMaxOrderByAggregateInput)
], SessionOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => SessionMinOrderByAggregateInput_1.SessionMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SessionMinOrderByAggregateInput_1.SessionMinOrderByAggregateInput)
], SessionOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SessionSumOrderByAggregateInput_1.SessionSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SessionSumOrderByAggregateInput_1.SessionSumOrderByAggregateInput)
], SessionOrderByWithAggregationInput.prototype, "_sum", void 0);
SessionOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SessionOrderByWithAggregationInput);
exports.SessionOrderByWithAggregationInput = SessionOrderByWithAggregationInput;
