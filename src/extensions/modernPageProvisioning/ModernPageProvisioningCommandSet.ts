import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseListViewCommandSet,
  Command,
  IListViewCommandSetListViewUpdatedParameters,
  IListViewCommandSetExecuteEventParameters
} from '@microsoft/sp-listview-extensibility';

import TemplateBuilderDialog from './components/TemplateBuilderDialog'


/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IModernPageProvisioningCommandSetProperties {
  // This is an example; replace with your own properties
  sampleTextOne: string;
}

const LOG_SOURCE: string = 'ModernPageProvisioningCommandSet';

export default class ModernPageProvisioningCommandSet extends BaseListViewCommandSet<IModernPageProvisioningCommandSetProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, 'Initialized ModernPageProvisioningCommandSet');
    return Promise.resolve();
  }

  @override
  public onListViewUpdated(event: IListViewCommandSetListViewUpdatedParameters): void {

  }

  @override
  public async onExecute(event: IListViewCommandSetExecuteEventParameters): Promise<void> {

    switch (event.itemId) {
      case 'COMMAND_1':

        const dialog: TemplateBuilderDialog = new TemplateBuilderDialog();
        dialog.show();

        break;
      default:
        throw new Error('Unknown command');

    }
  }

}
