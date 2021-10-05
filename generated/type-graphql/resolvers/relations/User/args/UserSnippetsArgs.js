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
exports.UserSnippetsArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SnippetOrderByWithRelationInput_1 = require("../../../inputs/SnippetOrderByWithRelationInput");
const SnippetWhereInput_1 = require("../../../inputs/SnippetWhereInput");
const SnippetWhereUniqueInput_1 = require("../../../inputs/SnippetWhereUniqueInput");
const SnippetScalarFieldEnum_1 = require("../../../../enums/SnippetScalarFieldEnum");
let UserSnippetsArgs = class UserSnippetsArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SnippetWhereInput_1.SnippetWhereInput, {
        nullable: true
    }),
    __metadata("design:type", SnippetWhereInput_1.SnippetWhereInput)
], UserSnippetsArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SnippetOrderByWithRelationInput_1.SnippetOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSnippetsArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => SnippetWhereUniqueInput_1.SnippetWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", SnippetWhereUniqueInput_1.SnippetWhereUniqueInput)
], UserSnippetsArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], UserSnippetsArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], UserSnippetsArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SnippetScalarFieldEnum_1.SnippetScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSnippetsArgs.prototype, "distinct", void 0);
UserSnippetsArgs = __decorate([
    TypeGraphQL.ArgsType()
], UserSnippetsArgs);
exports.UserSnippetsArgs = UserSnippetsArgs;
