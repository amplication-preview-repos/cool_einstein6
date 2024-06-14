import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DesignService } from "./design.service";
import { DesignControllerBase } from "./base/design.controller.base";

@swagger.ApiTags("designs")
@common.Controller("designs")
export class DesignController extends DesignControllerBase {
  constructor(
    protected readonly service: DesignService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
