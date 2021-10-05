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
exports.SnippetUpdateManyWithoutOwnerInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SnippetCreateManyOwnerInputEnvelope_1 = require("../inputs/SnippetCreateManyOwnerInputEnvelope");
const SnippetCreateOrConnectWithoutOwnerInput_1 = require("../inputs/SnippetCreateOrConnectWithoutOwnerInput");
const SnippetCreateWithoutOwnerInput_1 = require("../inputs/SnippetCreateWithoutOwnerInput");
const SnippetScalarWhereInput_1 = require("../inputs/SnippetScalarWhereInput");
const SnippetUpdateManyWithWhereWithoutOwnerInput_1 = require("../inputs/SnippetUpdateManyWithWhereWithoutOwnerInput");
const SnippetUpdateWithWhereUniqueWithoutOwnerInput_1 = require("../inputs/SnippetUpdateWithWhereUniqueWithoutOwnerInput");
const SnippetUpsertWithWhereUniqueWithoutOwnerInput_1 = require("../inputs/SnippetUpsertWithWhereUniqueWithoutOwnerInput");
const SnippetWhereUniqueInput_1 = require("../inputs/SnippetWhereUniqueInput");
let SnippetUpdateManyWithoutOwnerInput = class SnippetUpdateManyWithoutOwnerInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SnippetCreateWithoutOwnerInput_1.SnippetCreateWithoutOwnerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SnippetUpdateManyWithoutOwnerInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SnippetCreateOrConnectWithoutOwnerInput_1.SnippetCreateOrConnectWithoutOwnerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SnippetUpdateManyWithoutOwnerInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SnippetUpsertWithWhereUniqueWithoutOwnerInput_1.SnippetUpsertWithWhereUniqueWithoutOwnerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SnippetUpdateManyWithoutOwnerInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => SnippetCreateManyOwnerInputEnvelope_1.SnippetCreateManyOwnerInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", SnippetCreateManyOwnerInputEnvelope_1.SnippetCreateManyOwnerInputEnvelope)
], SnippetUpdateManyWithoutOwnerInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SnippetWhereUniqueInput_1.SnippetWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SnippetUpdateManyWithoutOwnerInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SnippetWhereUniqueInput_1.SnippetWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SnippetUpdateManyWithoutOwnerInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SnippetWhereUniqueInput_1.SnippetWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SnippetUpdateManyWithoutOwnerInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SnippetWhereUniqueInput_1.SnippetWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SnippetUpdateManyWithoutOwnerInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SnippetUpdateWithWhereUniqueWithoutOwnerInput_1.SnippetUpdateWithWhereUniqueWithoutOwnerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SnippetUpdateManyWithoutOwnerInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SnippetUpdateManyWithWhereWithoutOwnerInput_1.SnippetUpdateManyWithWhereWithoutOwnerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SnippetUpdateManyWithoutOwnerInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SnippetScalarWhereInput_1.SnippetScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SnippetUpdateManyWithoutOwnerInput.prototype, "deleteMany", void 0);
SnippetUpdateManyWithoutOwnerInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SnippetUpdateManyWithoutOwnerInput);
exports.SnippetUpdateManyWithoutOwnerInput = SnippetUpdateManyWithoutOwnerInput;
