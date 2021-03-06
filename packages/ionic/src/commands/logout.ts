import { CommandGroup, CommandLineInputs, CommandLineOptions, CommandMetadata } from '@ionic/cli-utils';
import { Command } from '@ionic/cli-utils/lib/command';

export class LogoutCommand extends Command {
  async getMetadata(): Promise<CommandMetadata> {
    return {
      name: 'logout',
      type: 'global',
      description: '',
      groups: [CommandGroup.Hidden],
    };
  }

  async run(inputs: CommandLineInputs, options: CommandLineOptions): Promise<void> {
    if (!(await this.env.session.isLoggedIn())) {
      this.env.log.msg('You are already logged out.');
      return;
    }

    await this.env.session.logout();
    this.env.log.ok('You are logged out.');
  }
}
