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
exports.SnippetOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SnippetAvgOrderByAggregateInput_1 = require("../inputs/SnippetAvgOrderByAggregateInput");
const SnippetCountOrderByAggregateInput_1 = require("../inputs/SnippetCountOrderByAggregateInput");
const SnippetMaxOrderByAggregateInput_1 = require("../inputs/SnippetMaxOrderByAggregateInput");
const SnippetMinOrderByAggregateInput_1 = require("../inputs/SnippetMinOrderByAggregateInput");
const SnippetSumOrderByAggregateInput_1 = require("../inputs/SnippetSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SnippetOrderByWithAggregationInput = class SnippetOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SnippetOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SnippetOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SnippetOrderByWithAggregationInput.prototype, "language", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SnippetOrderByWithAggregationInput.prototype, "code", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SnippetOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SnippetOrderByWithAggregationInput.prototype, "framework", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SnippetOrderByWithAggregationInput.prototype, "resource", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SnippetOrderByWithAggregationInput.prototype, "private", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SnippetOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SnippetOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SnippetOrderByWithAggregationInput.prototype, "ownerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SnippetCountOrderByAggregateInput_1.SnippetCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SnippetCountOrderByAggregateInput_1.SnippetCountOrderByAggregateInput)
], SnippetOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SnippetAvgOrderByAggregateInput_1.SnippetAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SnippetAvgOrderByAggregateInput_1.SnippetAvgOrderByAggregateInput)
], SnippetOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => SnippetMaxOrderByAggregateInput_1.SnippetMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SnippetMaxOrderByAggregateInput_1.SnippetMaxOrderByAggregateInput)
], SnippetOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => SnippetMinOrderByAggregateInput_1.SnippetMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SnippetMinOrderByAggregateInput_1.SnippetMinOrderByAggregateInput)
], SnippetOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SnippetSumOrderByAggregateInput_1.SnippetSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SnippetSumOrderByAggregateInput_1.SnippetSumOrderByAggregateInput)
], SnippetOrderByWithAggregationInput.prototype, "_sum", void 0);
SnippetOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SnippetOrderByWithAggregationInput);
exports.SnippetOrderByWithAggregationInput = SnippetOrderByWithAggregationInput;