/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Template as PrismaTemplate,
  Design as PrismaDesign,
  Project as PrismaProject,
} from "@prisma/client";

export class TemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TemplateCountArgs, "select">): Promise<number> {
    return this.prisma.template.count(args);
  }

  async templates<T extends Prisma.TemplateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateFindManyArgs>
  ): Promise<PrismaTemplate[]> {
    return this.prisma.template.findMany<Prisma.TemplateFindManyArgs>(args);
  }
  async template<T extends Prisma.TemplateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateFindUniqueArgs>
  ): Promise<PrismaTemplate | null> {
    return this.prisma.template.findUnique(args);
  }
  async createTemplate<T extends Prisma.TemplateCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateCreateArgs>
  ): Promise<PrismaTemplate> {
    return this.prisma.template.create<T>(args);
  }
  async updateTemplate<T extends Prisma.TemplateUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateUpdateArgs>
  ): Promise<PrismaTemplate> {
    return this.prisma.template.update<T>(args);
  }
  async deleteTemplate<T extends Prisma.TemplateDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateDeleteArgs>
  ): Promise<PrismaTemplate> {
    return this.prisma.template.delete(args);
  }

  async findDesigns(
    parentId: string,
    args: Prisma.DesignFindManyArgs
  ): Promise<PrismaDesign[]> {
    return this.prisma.template
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .designs(args);
  }

  async findProjects(
    parentId: string,
    args: Prisma.ProjectFindManyArgs
  ): Promise<PrismaProject[]> {
    return this.prisma.template
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .projects(args);
  }
}
