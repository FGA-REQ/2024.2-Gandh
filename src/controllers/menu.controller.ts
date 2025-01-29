import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { MenuService } from '../services/menu.service';
import { CreateMenuDto } from '../dtos/create-menu.dto';
import { CreateItemDto } from '../dtos/create-item.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async getAllMenus(): Promise<any[]> {
    return this.menuService.findAll();
  }

  @Get(':id')
  async getMenuById(@Param('id') id: number): Promise<any> {
    return this.menuService.findById(id);
  }

  @Post()
  async createMenu(@Body() createMenuDto: CreateMenuDto): Promise<any> {
    return this.menuService.createMenu(createMenuDto.name);
  }

  @Delete(':id')
  async deleteMenu(@Param('id') id: number): Promise<void> {
    return this.menuService.deleteMenu(id);
  }

  @Post(':id/groups')
  async createGroup(
    @Param('id') id: number,
    @Body() body: { name: string },
  ) {
    const result = await this.menuService.createGroup(body.name, id);
    return { message: `Grupo '${body.name}' criado para o menu com ID ${id}.`, group: result };
  }

  @Get(':id/groups')
  async getGroupsByMenuId(@Param('id') id: number) {
    return this.menuService.getGroupsByMenuId(id);
  }

  @Delete('group/:id')
  async deleteGroup(@Param('id') id: number) {
    const result = await this.menuService.deleteGroup(id);
    if (result) {
      return { message: `Grupo com ID ${id} deletado com sucesso.` };
    } else {
      return { message: `Grupo com ID ${id} não encontrado.` };
    }
  }

  @Post('group/:groupId/item')
  async createItem(
    @Param('groupId') groupId: number,
    @Body() createItemDto: CreateItemDto
  ) {
    const item = await this.menuService.createItem(groupId, createItemDto);
    return { message: 'Item criado com sucesso', item };
  }

  @Get('group/:groupId/items')
  async getItemsByGroupId(@Param('groupId') groupId: number) {
    const items = await this.menuService.getItemsByGroupId(groupId);
    return { message: 'Itens do grupo encontrados com sucesso.', items };
  }

  @Delete('item/:itemId')
  async deleteItem(@Param('itemId') itemId: number) {
    const result = await this.menuService.deleteItem(itemId);
    if (result) {
      return { message: `Item com ID ${itemId} deletado com sucesso.` };
    } else {
      return { message: `Item com ID ${itemId} não encontrado.` };
    }
  }

  @Post('item/:itemId/complement')
  async createComplement(
    @Param('itemId') itemId: number,
  ) {
    const result = await this.menuService.createComplement(itemId);
    return { message: `Complemento criado para o item com ID ${itemId}.`, complement: result };
  }

  @Get('item/:itemId/complements')
  async getComplementsByItemId(@Param('itemId') itemId: number) {
    return this.menuService.getComplementsByItemId(itemId);
  }

  @Delete('complement/:compId')
  async deleteComplement(@Param('compId') compId: number) {
    const result = await this.menuService.deleteComplement(compId);
    if (result) {
      return { message: `Complemento com ID ${compId} deletado com sucesso.` };
    } else {
      return { message: `Complemento com ID ${compId} não encontrado.` };
    }
  }

  @Post('complement/:compId/group_c')
  async createGroupComplement(
    @Param('compId') compId: number,
    @Body() body: { name: string; mandatory: boolean; min: number; max: number }
  ) {
    const result = await this.menuService.createGroupComplement(compId, body.name, body.mandatory, body.min, body.max);
    return { message: `Grupo de complementos '${body.name}' criado para o complemento com ID ${compId}.`, group_c: result };
  }

  @Get('complement/:compId/group_c')
  async getGroupsByComplementId(@Param('compId') compId: number) {
    return this.menuService.getGroupsByComplementId(compId);
  }

  @Delete('group_c/:gcId')
  async deleteGroupComplement(@Param('gcId') gcId: number) {
    const result = await this.menuService.deleteGroupComplement(gcId);
    if (result) {
      return { message: `Grupo de complementos com ID ${gcId} deletado com sucesso.` };
    } else {
      return { message: `Grupo de complementos com ID ${gcId} não encontrado.` };
    }
  }

  @Post('group_c/:gcId/item_c')
  async createItemComplement(
    @Param('gcId') gcId: number,
    @Body() body: { name: string; price: number; description: string; status: boolean; photo: string }
  ) {
    const result = await this.menuService.createItemComplement(gcId, body.name, body.price, body.description, body.status, body.photo);
    return { message: `Item de complemento '${body.name}' criado para o grupo de complementos com ID ${gcId}.`, item_c: result };
  }

  @Get('group_c/:gcId/item_c')
  async getItemsByGroupComplementId(@Param('gcId') gcId: number) {
    return this.menuService.getItemsByGroupComplementId(gcId);
  }

  @Delete('item_c/:icId')
  async deleteItemComplement(@Param('icId') icId: number) {
    const result = await this.menuService.deleteItemComplement(icId);
    if (result) {
      return { message: `Item de complemento com ID ${icId} deletado com sucesso.` };
    } else {
      return { message: `Item de complemento com ID ${icId} não encontrado.` };
    }
  }
}
