import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DesignModuleBase } from "./base/design.module.base";
import { DesignService } from "./design.service";
import { DesignController } from "./design.controller";
import { DesignResolver } from "./design.resolver";

@Module({
  imports: [DesignModuleBase, forwardRef(() => AuthModule)],
  controllers: [DesignController],
  providers: [DesignService, DesignResolver],
  exports: [DesignService],
})
export class DesignModule {}
