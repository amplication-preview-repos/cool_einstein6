/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DesignService } from "../design.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DesignCreateInput } from "./DesignCreateInput";
import { Design } from "./Design";
import { DesignFindManyArgs } from "./DesignFindManyArgs";
import { DesignWhereUniqueInput } from "./DesignWhereUniqueInput";
import { DesignUpdateInput } from "./DesignUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DesignControllerBase {
  constructor(
    protected readonly service: DesignService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Design })
  @nestAccessControl.UseRoles({
    resource: "Design",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDesign(@common.Body() data: DesignCreateInput): Promise<Design> {
    return await this.service.createDesign({
      data: {
        ...data,

        template: data.template
          ? {
              connect: data.template,
            }
          : undefined,
      },
      select: {
        assets: true,
        createdAt: true,
        id: true,

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Design] })
  @ApiNestedQuery(DesignFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Design",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async designs(@common.Req() request: Request): Promise<Design[]> {
    const args = plainToClass(DesignFindManyArgs, request.query);
    return this.service.designs({
      ...args,
      select: {
        assets: true,
        createdAt: true,
        id: true,

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Design })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Design",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async design(
    @common.Param() params: DesignWhereUniqueInput
  ): Promise<Design | null> {
    const result = await this.service.design({
      where: params,
      select: {
        assets: true,
        createdAt: true,
        id: true,

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Design })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Design",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDesign(
    @common.Param() params: DesignWhereUniqueInput,
    @common.Body() data: DesignUpdateInput
  ): Promise<Design | null> {
    try {
      return await this.service.updateDesign({
        where: params,
        data: {
          ...data,

          template: data.template
            ? {
                connect: data.template,
              }
            : undefined,
        },
        select: {
          assets: true,
          createdAt: true,
          id: true,

          template: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Design })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Design",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDesign(
    @common.Param() params: DesignWhereUniqueInput
  ): Promise<Design | null> {
    try {
      return await this.service.deleteDesign({
        where: params,
        select: {
          assets: true,
          createdAt: true,
          id: true,

          template: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
