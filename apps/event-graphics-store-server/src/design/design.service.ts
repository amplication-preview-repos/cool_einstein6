import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DesignServiceBase } from "./base/design.service.base";

@Injectable()
export class DesignService extends DesignServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
