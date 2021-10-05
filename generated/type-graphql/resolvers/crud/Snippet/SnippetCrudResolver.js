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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnippetCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateSnippetArgs_1 = require("./args/AggregateSnippetArgs");
const CreateManySnippetArgs_1 = require("./args/CreateManySnippetArgs");
const CreateSnippetArgs_1 = require("./args/CreateSnippetArgs");
const DeleteManySnippetArgs_1 = require("./args/DeleteManySnippetArgs");
const DeleteSnippetArgs_1 = require("./args/DeleteSnippetArgs");
const FindFirstSnippetArgs_1 = require("./args/FindFirstSnippetArgs");
const FindManySnippetArgs_1 = require("./args/FindManySnippetArgs");
const FindUniqueSnippetArgs_1 = require("./args/FindUniqueSnippetArgs");
const GroupBySnippetArgs_1 = require("./args/GroupBySnippetArgs");
const UpdateManySnippetArgs_1 = require("./args/UpdateManySnippetArgs");
const UpdateSnippetArgs_1 = require("./args/UpdateSnippetArgs");
const UpsertSnippetArgs_1 = require("./args/UpsertSnippetArgs");
const helpers_1 = require("../../../helpers");
const Snippet_1 = require("../../../models/Snippet");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSnippet_1 = require("../../outputs/AggregateSnippet");
const SnippetGroupBy_1 = require("../../outputs/SnippetGroupBy");
let SnippetCrudResolver = class SnippetCrudResolver {
    async snippet(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snippet.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSnippet(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snippet.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async snippets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snippet.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSnippet(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snippet.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManySnippet(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snippet.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSnippet(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snippet.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSnippet(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snippet.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySnippet(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snippet.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySnippet(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snippet.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSnippet(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snippet.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSnippet(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).snippet.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySnippet(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snippet.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Snippet_1.Snippet, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueSnippetArgs_1.FindUniqueSnippetArgs]),
    __metadata("design:returntype", Promise)
], SnippetCrudResolver.prototype, "snippet", null);
__decorate([
    TypeGraphQL.Query(_returns => Snippet_1.Snippet, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstSnippetArgs_1.FindFirstSnippetArgs]),
    __metadata("design:returntype", Promise)
], SnippetCrudResolver.prototype, "findFirstSnippet", null);
__decorate([
    TypeGraphQL.Query(_returns => [Snippet_1.Snippet], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManySnippetArgs_1.FindManySnippetArgs]),
    __metadata("design:returntype", Promise)
], SnippetCrudResolver.prototype, "snippets", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Snippet_1.Snippet, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateSnippetArgs_1.CreateSnippetArgs]),
    __metadata("design:returntype", Promise)
], SnippetCrudResolver.prototype, "createSnippet", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManySnippetArgs_1.CreateManySnippetArgs]),
    __metadata("design:returntype", Promise)
], SnippetCrudResolver.prototype, "createManySnippet", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Snippet_1.Snippet, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteSnippetArgs_1.DeleteSnippetArgs]),
    __metadata("design:returntype", Promise)
], SnippetCrudResolver.prototype, "deleteSnippet", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Snippet_1.Snippet, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateSnippetArgs_1.UpdateSnippetArgs]),
    __metadata("design:returntype", Promise)
], SnippetCrudResolver.prototype, "updateSnippet", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManySnippetArgs_1.DeleteManySnippetArgs]),
    __metadata("design:returntype", Promise)
], SnippetCrudResolver.prototype, "deleteManySnippet", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManySnippetArgs_1.UpdateManySnippetArgs]),
    __metadata("design:returntype", Promise)
], SnippetCrudResolver.prototype, "updateManySnippet", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Snippet_1.Snippet, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertSnippetArgs_1.UpsertSnippetArgs]),
    __metadata("design:returntype", Promise)
], SnippetCrudResolver.prototype, "upsertSnippet", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateSnippet_1.AggregateSnippet, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateSnippetArgs_1.AggregateSnippetArgs]),
    __metadata("design:returntype", Promise)
], SnippetCrudResolver.prototype, "aggregateSnippet", null);
__decorate([
    TypeGraphQL.Query(_returns => [SnippetGroupBy_1.SnippetGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupBySnippetArgs_1.GroupBySnippetArgs]),
    __metadata("design:returntype", Promise)
], SnippetCrudResolver.prototype, "groupBySnippet", null);
SnippetCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Snippet_1.Snippet)
], SnippetCrudResolver);
exports.SnippetCrudResolver = SnippetCrudResolver;
