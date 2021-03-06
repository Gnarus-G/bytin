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
exports.VerificationRequestOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const VerificationRequestAvgOrderByAggregateInput_1 = require("../inputs/VerificationRequestAvgOrderByAggregateInput");
const VerificationRequestCountOrderByAggregateInput_1 = require("../inputs/VerificationRequestCountOrderByAggregateInput");
const VerificationRequestMaxOrderByAggregateInput_1 = require("../inputs/VerificationRequestMaxOrderByAggregateInput");
const VerificationRequestMinOrderByAggregateInput_1 = require("../inputs/VerificationRequestMinOrderByAggregateInput");
const VerificationRequestSumOrderByAggregateInput_1 = require("../inputs/VerificationRequestSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let VerificationRequestOrderByWithAggregationInput = class VerificationRequestOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], VerificationRequestOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], VerificationRequestOrderByWithAggregationInput.prototype, "identifier", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], VerificationRequestOrderByWithAggregationInput.prototype, "token", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], VerificationRequestOrderByWithAggregationInput.prototype, "expires", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], VerificationRequestOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], VerificationRequestOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => VerificationRequestCountOrderByAggregateInput_1.VerificationRequestCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", VerificationRequestCountOrderByAggregateInput_1.VerificationRequestCountOrderByAggregateInput)
], VerificationRequestOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => VerificationRequestAvgOrderByAggregateInput_1.VerificationRequestAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", VerificationRequestAvgOrderByAggregateInput_1.VerificationRequestAvgOrderByAggregateInput)
], VerificationRequestOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => VerificationRequestMaxOrderByAggregateInput_1.VerificationRequestMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", VerificationRequestMaxOrderByAggregateInput_1.VerificationRequestMaxOrderByAggregateInput)
], VerificationRequestOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => VerificationRequestMinOrderByAggregateInput_1.VerificationRequestMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", VerificationRequestMinOrderByAggregateInput_1.VerificationRequestMinOrderByAggregateInput)
], VerificationRequestOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => VerificationRequestSumOrderByAggregateInput_1.VerificationRequestSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", VerificationRequestSumOrderByAggregateInput_1.VerificationRequestSumOrderByAggregateInput)
], VerificationRequestOrderByWithAggregationInput.prototype, "_sum", void 0);
VerificationRequestOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], VerificationRequestOrderByWithAggregationInput);
exports.VerificationRequestOrderByWithAggregationInput = VerificationRequestOrderByWithAggregationInput;
